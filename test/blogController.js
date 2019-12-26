import Blog from './blogModel'

// Create
exports.addBlog = (req) => {
    const blog = new Blog(req.body)

    blog
        .validate()
        .then(res => {
            blog.save((err, data) => {
                if (err) {
                    console.log('Error', err)
                }
                console.log('ggg', data)
            })
        })
        .catch(error => {
            console.log('error', error)
        })
}

// Read
exports.list = (req, res) => {
    // let order = req.query.order ? req.query.order : 'asc';
    // let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    // let limit = req.query.limit ? parseInt(req.query.limit) : 6;

    Blog.find()
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "Products not found"
                });
            }
            // res.json(products);
            console.log('list', data)
        });
};

// Update

//Delete
exports.remove = (id = undefined) => {
    // let order = req.query.order ? req.query.order : 'asc';
    // let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    // let limit = req.query.limit ? parseInt(req.query.limit) : 6;
    if (!id) {
        Blog.remove({}, function (err) {
            console.log('collection removed')
        });
    } else {
        Blog.findOne({_id: id}).then(res => console.log('findone', res)).catch(error => console.log('findoneError', error))
    }
};

