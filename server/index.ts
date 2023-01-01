import express, { ErrorRequestHandler, RequestHandler } from 'express';
import { createPostHandler, listPostHandler } from './handlers/postHandler';
const app = express();

app.use(express.json());


const requestLoggerMiddleware: RequestHandler = (req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
};

app.use(requestLoggerMiddleware);
// create date logger middleware
const dateLoggerMiddleware: RequestHandler = (req, res, next) => {
    console.log(new Date());
    next();
};

app.use(dateLoggerMiddleware);

app.get('/posts', listPostHandler);
app.post('/posts', createPostHandler);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err);
    return res.status(500).send({ error: "Something went wrong" });
};

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server running on port 3000');
    }
);
