import express, { RequestHandler } from 'express';

const app = express();

// parse application/json
app.use(express.json());


const posts: any[] = [];

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
app.get('/posts', (req, res) => {
    res.send({ posts });
});



app.post('/posts', (req, res) => {
    const post = req.body;  
    posts.push(post);
    res.send('post added');

});

app.listen(3000, () => {
    console.log('Server running on port 3000');
    }
);
