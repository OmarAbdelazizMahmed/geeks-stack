import express, { RequestHandler } from 'express';
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

app.listen(3000, () => {
    console.log('Server running on port 3000');
    }
);
