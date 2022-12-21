export interface User {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
}

export interface Post {
    id: string;
    title: string;
    url: string;
    userId: string;
    postedAt: string;
}

export interface Like {
    id: string;
    userId: string;
    postId: string;
}

export interface Comment {
    id: string;
    userId: string;
    postId: string;
    content: string;
    createdAt: string;
}


