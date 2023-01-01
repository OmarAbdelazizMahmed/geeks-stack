import {
  CreatePostRequest,
  CreatePostResponse,
  ListPostRequest,
  ListPostResponse,
} from "../api";
import { db } from "../datastore";
import { ExpressHandler, Post } from "../types";
import crypto from "crypto";

export const listPostHandler: ExpressHandler<
  ListPostRequest,
  ListPostResponse
> = (req, res) => {
  res.send({ posts: db.listPosts() });
};

export const createPostHandler: ExpressHandler<
  CreatePostRequest,
  CreatePostResponse
> = (req, res) => {
    // TODO: validate request body
    // TODO: get userId from session
    // TODO: validate url is new otherwise add +1 to the existing post
    
  if (!req.body.title || !req.body.url || !req.body.userId) {
    return res.status(400).send({ error: "title, url, userId are required" });
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
};
