import http from 'http';
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

import dotenv from 'dotenv';
const dotEnvConfig = dotenv.config();

import Routes from './routes/routes'

// import path from "path";

const app = express();
// / setup express application
const server = http.createServer(app);

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());
app.disable('etag');

// Router
app.use("/v1",Routes);

const hostname = process.env.APP_HOST || '127.127.127.127';
const port = process.env.APP_PORT || 3001;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});