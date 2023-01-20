import { CommentDao } from "./doa/CommentDoa";
import { LikeDao } from "./doa/LikeDao";
import { PostDao } from "./doa/PostDoa";
import { UserDao } from "./doa/UserDao";

import { SqlDataStore } from "./sql";

export interface DataStore  extends  UserDao, PostDao, CommentDao, LikeDao{}

export let db: DataStore;

export async function initDB() {
    db = await new SqlDataStore().openDb();
}

