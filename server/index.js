import http from 'http';
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


import dotenv from 'dotenv';
const dotEnvConfig = dotenv.config();

import config from './config/appConfig';

import Routes from './routes/routes'

// import path from "path";

const app = express();

app.use(cors());
// / setup express application
const server = http.createServer(app);

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.disable('etag');

// Router
app.use("/v1",Routes);

const port = process.env.APP_SERVER_PORT || "3002";


//mongoose.connect(uri, options);
//Specifies which database to connect to and overrides any database specified in the connection string
//useNewUrlParser flag to allow users to fall back to the old parser if they find a bug in the new parser
mongoose
    .connect(config.mongoURL, {
        dbName: config.dbName,
        useNewUrlParser: true,
    })
    .then(() => console.log("DB Connected"))
    .catch(err => console.log('error'));

server.listen(port, () => {
    console.log(`Server running at port : `+server.address().port);
});