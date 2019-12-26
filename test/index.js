import mongoose from 'mongoose';

import {uri, dbName} from './appConfig';

import {addBlog,list,remove} from './blogController'

//mongoose.connect(uri, options);
//Specifies which database to connect to and overrides any database specified in the connection string
//useNewUrlParser flag to allow users to fall back to the old parser if they find a bug in the new parser
mongoose
    .connect(uri, {
        dbName: dbName,
        useNewUrlParser: true,
    })
    .then(() => console.log("DB Connected"))
    .catch(err => console.log('error'))


// remove("5e048e799bdbdf0a20bff24b");

// addBlog(
// {
//     "body": {
//         "title": "banana",
//         "author": "apple-author",
//         "body": "This is the test. blog posts. this is the second one."
//     }})

// list()



