import { Like, Post } from "./types";


export type CreatePostRequest = Pick<Post, "title" | "url" | "userId">;
export interface CreatePostResponse {
}

export type ListPostRequest = {};
export interface ListPostResponse {
    posts: Post[];
}

export type GetPostRequest = {};

export interface GetPostResponse {
    post: Post;
}


// comment apis

export type CreateCommentRequest = Pick<Comment, "content" | "postId" | "userId">;
export interface CreateCommentResponse {
}

export type ListCommentRequest = {};
export interface ListCommentResponse {
    comments: Comment[];
}


// like apis

export type CreateLikeRequest = Pick<Like, "postId" | "userId">;

export interface CreateLikeResponse {
}

export type ListLikeRequest = {};

export interface ListLikeResponse {
    likes: Like[];
}

 
