import Blog from '../model/blogModel'
import {errorHandler, successHandler} from '../utils/dbMessageHandler'

// CRUD = Create
exports.addBlog = (req, res, next) => {
    if (req.body) {
        const {title, author, body} = req.body;

        if (!title || !author || !body) {
            res.status(400).json({
                error: errorHandler({message: "all fields are required!"})
            });
            next();
        }

        const temp = {title, author, body};

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
        const {title, author, body} = req.body;
        console.log('gg', req.body)
        if (!title || !author || !body) {
            res.status(400).json({
                error: errorHandler({message: 'All fields are required'})
            });
            next();
        }

        Blog.updateOne({_id: req.params.blog_id},
            {
                _id: req.params.blog_id,
                title: title,
                author: author,
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

// CRUD = Destroy
exports.destroy = (id) => {
    if (!id) {
        Blog.remove({}, function (err) {
            if (!err) {
                successHandler({message: "blog clean successfully"})
            } else {
                errorHandler(err)
            }
        });
    } else {
        Blog.remove({_id: id}, function (err) {
            if (!err) {
                successHandler({message: "blog delete successfully"})
            } else {
                errorHandler(err)
            }
        });
    }
};

