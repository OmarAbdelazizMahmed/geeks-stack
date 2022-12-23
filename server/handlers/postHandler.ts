import { db } from "../datastore";
import { ExpressHandler, Post } from "../types";
import crypto from "crypto";


export const listPostHandler: ExpressHandler<{}, {}> = (req, res) => {
    res.send({ post: db.listPosts() });
}

type CreatePostRequest = Pick<Post, "title" | "url" | "userId">;
interface CreatePostResponse {

}

export const createPostHandler: ExpressHandler<CreatePostRequest, CreatePostResponse>  = (req, res) => {
   
    if (!req.body.title || !req.body.url || !req.body.userId) {
        res.status(400).send({ error: "title, url, userId are required" });
        return;
    }

    const post: Post = {
        id: crypto.randomUUID(),
        title: req.body.title,
        url: req.body.url,
        userId: req.body.userId,
        postedAt: new Date().toISOString(),
    };
    
    db.createPost(post);
    res.send({ post });
}
