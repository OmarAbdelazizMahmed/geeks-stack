// reading from the database and returning the data to the memory

import { User } from "../../types";

// this is the data access object
export interface UserDao {
    createUser(user: User): Promise<void>;
    getUserByEmail(email: string): Promise<User | undefined>;
    getUserByUsername(username: string): Promise<User | undefined>;
}