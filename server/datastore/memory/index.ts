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
    createUser(user: User): void {
        this.users.push(user);
    }

    getUserByEmail(email: string): User | undefined {
        return this.users.find((user) => user.email === email);
    }

    getUserByUsername(username: string): User | undefined {
        return this.users.find((user) => user.username === username);
    }


    // Path: server/datastore/memory/PostDoa.ts
    // Compare this snippet from server/datastore/PostDoa.ts:
    // export interface PostDao {
    //     listPosts(): Post[];
    //     createPost(post: Post): void;
    //     getPostById(id: string): Post | undefined;
    //     deletePostById(id: string): void;
    // }
    listPosts(): Post[] {
        return this.posts;
    }

    createPost(post: Post): void {
        this.posts.push(post);
    }

    getPostById(id: string): Post | undefined {
        return this.posts.find((post) => post.id === id);
    }

    deletePostById(id: string): void {
        const postIndex = this.posts.findIndex((post) => post.id === id);
        if (postIndex !== -1) {
            this.posts.splice(postIndex, 1);
        }

        this.comments = this.comments.filter((comment) => comment.postId !== id);
        this.likes = this.likes.filter((like) => like.postId !== id);
    }

    // Path: server/datastore/memory/CommentDoa.ts
    // Compare this snippet from server/datastore/CommentDoa.ts:
    // export interface CommentDao {
    //     createComment(comment: Comment): void;
    //     listComments(postId: string): Comment[];
    //     deleteComment(id: string): void;
    // }
    createComment(comment: Comment): void {
        this.comments.push(comment);
    }

    listComments(postId: string): Comment[] {
        return this.comments.filter((comment) => comment.postId === postId);
    }
    deleteComment(id: string): void {
        const commentIndex = this.comments.findIndex((comment) => comment.id === id);
        if (commentIndex !== -1) {
            this.comments.splice(commentIndex, 1);
        }
    }

    // Path: server/datastore/memory/LikeDao.ts
    // Compare this snippet from server/datastore/LikeDao.ts:
    // export interface LikeDao {
    //     createLike(like: Like): void;
    // }

    createLike(like: Like): void {
        this.likes.push(like);
    }

    // Path: server/datastore/memory/index.ts
    // Compare this snippet from server/datastore/index.ts:
    // import { CommentDao } from "./CommentDoa";
    // import { LikeDao } from "./LikeDao";
    // import { PostDao } from "./PostDoa";
    // import { UserDao } from "./UserDao";
    //
    // export interface DataStore  extends  UserDao, PostDao, CommentDao, LikeDao{}
}
