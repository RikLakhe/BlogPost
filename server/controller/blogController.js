import Blog from '../model/blogModel'
import {errorHandler, successHandler} from '../utils/dbMessageHandler'
import uuidv1 from 'uuid/v1';

// CRUD = Create
exports.addBlog = (req, res, next) => {
    if (req.body) {
        const {title, author_id, author, body} = req.body;

        if (!title || !author || !body || !author_id) {
            res.status(400).json({
                error: errorHandler({message: "all fields are required!"})
            });
            next();
        }

        const temp = {title, author, author_id, body};

        const blog = new Blog(temp);

        blog.save((err, data) => {
            if (err) {
                res.status(400).json({
                    error: errorHandler(err)
                });
                next();
            } else {
                res.send({data: successHandler(data)});
                next();
            }
        })
    }

};

// CRUD = Read
exports.list = (req, res, next) => {
    let order = req.query.time ? req.query.time : 0;
    let limit = 5;

    Blog.find()
        .skip(order * 5)
        .limit(limit)
        .sort({date: -1})
        .exec((error, response) => {
            if (!error) {
                if (response.length === 0) {
                    res.status(400).send({data: errorHandler({message: "End of Blog list"})})
                } else {
                    res.status(200).send({data: successHandler(response)});
                }
                next();
            } else {
                res.status(400).json({
                    error: errorHandler(error)
                });
                next();
            }
        });

};

exports.findById = (req, res, next) => {
    if (req.params.blog_id.match(/^[0-9a-fA-F]{24}$/)) {
        Blog.find({_id: req.params.blog_id})
            .exec((error, response) => {
                if (!error) {
                    res.send({data: successHandler(response)});
                    next();
                } else {
                    res.status(400).json({
                        error: errorHandler(error)
                    });
                    next();
                }
            })


    } else {
        res.status(400).json({
            error: errorHandler({message: "Not found in database"})
        });
        next();
    }
};

exports.findByCriteria = (req, res, next) => {
    const {dataType, searchItem} = req.body;

    if (!dataType || !searchItem) {
        res.status(400).json({
            error: errorHandler({message: "all fields are required!"})
        });
        next();
    }

    Blog.find({[dataType]: {$regex: new RegExp(searchItem)}})
        .exec((error, response) => {
            if (!error) {
                res.send({data: successHandler(response)});
                next();
            } else {
                res.status(400).json({
                    error: errorHandler(error)
                });
                next();
            }
        })
};

// CRUD = Update
exports.update = (req, res, next) => {
    if (req.body) {
        const {title, body} = req.body;
        if (!title || !body) {
            res.status(400).json({
                error: errorHandler({message: 'All fields are required'})
            });
            next();
        }

        Blog.updateOne({_id: req.params.blog_id},
            {
                _id: req.params.blog_id,
                title: title,
                body: body,
            }, (error, response) => {
                if (!error) {
                    if (response && response.nModified > 0) {
                        res.status(200).send(successHandler({message: 'Blog update successfully'}));
                        next();
                    } else {
                        res.status(400).json({
                            error: errorHandler({message: 'Id not found'})
                        });
                        next();
                    }
                } else {
                    res.status(400).json({
                        error: errorHandler(error)
                    });
                    next();
                }
            })
    }
}

exports.updateComment = (req, res, next) => {
    if (req.body) {
        const {body, by, by_id} = req.body;
        if (!body || !by || !by_id) {
            res.status(400).json({
                error: errorHandler({message: 'All fields are required'})
            });
            next();
        }

        // Optional uuid state to apply.
        const v1options = {
            node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
            clockseq: 0x1234,
            nsecs: 5678,
            msecs: new Date().getTime(),
        };

        Blog.updateOne({_id: req.params.blog_id},
            {
                $push: {
                    comments: {
                        comment_id: uuidv1(v1options),
                        by: by,
                        by_id: by_id,
                        body: body,
                        reply: []
                    }
                }
            }, (error, response) => {
                if (!error) {
                    if (response && response.nModified > 0) {
                        Blog.find({_id: req.params.blog_id})
                            .exec((error, response) => {
                                if (!error) {
                                    res.send({data: successHandler(response)});
                                    next();
                                } else {
                                    res.status(400).json({
                                        error: errorHandler(error)
                                    });
                                    next();
                                }
                            })
                    } else {
                        res.status(400).json({
                            error: errorHandler({message: 'Id not found'})
                        });
                        next();
                    }
                } else {
                    res.status(400).json({
                        error: errorHandler(error)
                    });
                    next();
                }
            })
    }
}

exports.updateReply = (req, res, next) => {
    if (req.body) {
        const {body, by, by_id} = req.body;
        if (!body || !by || !by_id) {
            res.status(400).json({
                error: errorHandler({message: 'All fields are required'})
            });
            next();
        }

        Blog.updateOne({"_id": req.params.blog_id,"comments.comment_id": req.params.comment_id },
            {
                $push: {
                    "comments.$.reply" : {
                        by: by,
                        by_id: by_id,
                        body: body,
                    }
                }
            }, (error, response) => {
                if (!error) {
                    if (response && response.nModified > 0) {
                        Blog.find({_id: req.params.blog_id})
                            .exec((error, response) => {
                                if (!error) {
                                    res.send({data: successHandler(response)});
                                    next();
                                } else {
                                    res.status(400).json({
                                        error: errorHandler(error)
                                    });
                                    next();
                                }
                            })
                    } else {
                        res.status(400).json({
                            error: errorHandler({message: 'Id not found'})
                        });
                        next();
                    }
                } else {
                    res.status(400).json({
                        error: errorHandler(error)
                    });
                    next();
                }
            })
    }
}

// CRUD = Destroy
exports.removeAll = (req, res, next) => {
    Blog.deleteMany({}, function (err) {
        if (!err) {
            res.status(200).send(successHandler({message: 'All blog deleted Successfully'}));
        } else {
            res.status(400).json({
                error: errorHandler(err)
            });
        }
    });
};

exports.remove = (req, res, next) => {
    if (req.params.blog_id.match(/^[0-9a-fA-F]{24}$/)) {
        Blog.deleteOne({_id: req.params.blog_id}, function (err) {
            if (!err) {
                res.status(200).send(successHandler({message: 'Blog deleted Successfully'}));
            } else {
                res.status(400).json({
                    error: errorHandler(err)
                });
            }
        });
    }
};

