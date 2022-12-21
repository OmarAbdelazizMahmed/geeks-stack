import { CommentDao } from "./CommentDoa";
import { LikeDao } from "./LikeDao";
import { PostDao } from "./PostDoa";
import { UserDao } from "./UserDao";
import { InMemoryDataStore } from "./memory";

export interface DataStore  extends  UserDao, PostDao, CommentDao, LikeDao{}

export const db = new InMemoryDataStore();