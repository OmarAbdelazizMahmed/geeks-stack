import express, { ErrorRequestHandler, RequestHandler } from 'express';
import { createPostHandler, listPostHandler } from './handlers/postHandler';
import asyncHandler from "express-async-handler"

const app = express();

app.use(express.json());


const requestLoggerMiddleware: RequestHandler = (req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
};

app.use(requestLoggerMiddleware);

app.get('/posts', asyncHandler(listPostHandler));
app.post('/posts', asyncHandler(createPostHandler));

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err);
    return res.status(500).send({ error: "Something went wrong" });
};

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server running on port 3000');
    }
);
