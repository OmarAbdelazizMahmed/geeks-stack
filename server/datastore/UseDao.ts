// reading from the database and returning the data to the memory

import { User } from "../types";

// this is the data access object
export interface UseDao {
    createUser(user: User): void;
    getUserByEmail(email: string): User | undefined;
    getUserByUsername(username: string): User | undefined;
}