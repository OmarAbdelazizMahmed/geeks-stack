import { Post } from "../../types";

export interface PostDao {
    listPosts(): Promise<Post[]>;
    createPost(post: Post): Promise<void>;
    getPostById(id: string): Promise<Post | undefined>;
    deletePostById(id: string): Promise<void>;
}