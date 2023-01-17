import { DataStore } from "..";
import { Comment, Like, Post, User } from "../../types";

export class InMemoryDataStore implements DataStore {
    private users: User[] = [];
    private posts: Post[] = [];
    private comments: Comment[] = [];
    private likes: Like[] = [];

    // Path: server/datastore/memory/UserDao.ts
    // Compare this snippet from server/datastore/UserDao.ts:
    // export interface UserDao {
    //     createUser(user: User): void;
    //     getUserById(id: string): User | undefined;
    // }
    createUser(user: User): Promise<void> {
        this.users.push(user);
        return Promise.resolve();
    }

    getUserByEmail(email: string): Promise<User | undefined> {
        return Promise.resolve(this.users.find((user) => user.email === email));
    }

    getUserByUsername(username: string): Promise<User | undefined> {
        return Promise.resolve(this.users.find((user) => user.username === username));
    }


    // Path: server/datastore/memory/PostDoa.ts
    // Compare this snippet from server/datastore/PostDoa.ts:
    // export interface PostDao {
    //     listPosts(): Post[];
    //     createPost(post: Post): void;
    //     getPostById(id: string): Post | undefined;
    //     deletePostById(id: string): void;
    // }
    listPosts(): Promise<Post[]> {
        return Promise.resolve(this.posts);
    }

    createPost(post: Post): Promise<void> {
        this.posts.push(post);
        return Promise.resolve();
    }

    getPostById(id: string): Promise<Post | undefined> {
        return Promise.resolve(this.posts.find((post) => post.id === id));
    }

    deletePostById(id: string): Promise<void> {
        const postIndex = this.posts.findIndex((post) => post.id === id);
        if (postIndex !== -1) {
            this.posts.splice(postIndex, 1);
        }

        this.comments = this.comments.filter((comment) => comment.postId !== id);
        this.likes = this.likes.filter((like) => like.postId !== id);
        return Promise.resolve();
    }

    // Path: server/datastore/memory/CommentDoa.ts
    // Compare this snippet from server/datastore/CommentDoa.ts:
    // export interface CommentDao {
    //     createComment(comment: Comment): void;
    //     listComments(postId: string): Comment[];
    //     deleteComment(id: string): void;
    // }
    createComment(comment: Comment): Promise<void> {
        this.comments.push(comment);
        return Promise.resolve();
    }

    listComments(postId: string): Promise<Comment[]> {
        return Promise.resolve(this.comments.filter((comment) => comment.postId === postId));
    }
    deleteComment(id: string): Promise<void> {
        const commentIndex = this.comments.findIndex((comment) => comment.id === id);
        if (commentIndex !== -1) {
            this.comments.splice(commentIndex, 1);
        }
        return Promise.resolve();
    }

    // Path: server/datastore/memory/LikeDao.ts
    // Compare this snippet from server/datastore/LikeDao.ts:
    // export interface LikeDao {
    //     createLike(like: Like): void;
    // }

    createLike(like: Like): Promise<void> {
        this.likes.push(like);
        return Promise.resolve();
    }

    nextPostId(): string {
        return (this.posts.length + 1).toString();
    }
    
}
