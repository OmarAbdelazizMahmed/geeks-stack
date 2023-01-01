import { CommentDao } from "./doa/CommentDoa";
import { LikeDao } from "./doa/LikeDao";
import { PostDao } from "./doa/PostDoa";
import { UserDao } from "./doa/UserDao";

import { InMemoryDataStore } from "./memory";

export interface DataStore  extends  UserDao, PostDao, CommentDao, LikeDao{}

export const db = new InMemoryDataStore();