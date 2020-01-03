import mongoose from 'mongoose';

import config from './config/appConfig';


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

// CRUD = CREATE
// addBlog(
// {
//     "body": {
//         "title": "banana",
//         "author": "apple-author",
//         "body":
//     }})

// CRUD = READ
// list()
// findById("5e048e799bdbdf0a20bff24b")

// CRUD = UPDATE
// update("5e048e799bdbdf0a20bff24b",{
//     "body": {
//         "title": "banana",
//         "author": "apple-author",
//         "body": "This is the server. blog posts. this is the second one."
//     }})

// CRUD = DESTROY
// remove("5e048e799bdbdf0a20bff24b");
