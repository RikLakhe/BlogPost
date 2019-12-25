import mongoose from 'mongoose';

import {uri,dbName} from './appConfig';

//mongoose.connect(uri, options);
//Specifies which database to connect to and overrides any database specified in the connection string
//useNewUrlParser flag to allow users to fall back to the old parser if they find a bug in the new parser
mongoose.connect(uri,{
    dbName : dbName,
    useNewUrlParser : true,
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log(" // we're connected!",uri+dbName)
});