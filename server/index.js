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

app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}));
// / setup express application
const server = http.createServer(app);

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.disable('etag');

// Router
app.use("/v1",Routes);

const port = process.env.APP_SERVER_PORT || "3002";

server.listen(port, () => {
    console.log(`Server running at port : `+server.address().port);
});