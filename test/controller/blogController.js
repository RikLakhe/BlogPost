import Blog from '../model/blogModel'
import {errorHandler,successHandler} from '../utils/dbMessageHandler'

// CRUD = Create
exports.addBlog = (req) => {
    const {title,author,body} = req.body;

    if(!title || !author || !body){
        console.log(errorHandler({message:'All fields are required'}))
    }
    const blog = new Blog(req.body);
    blog
        .validate()
        .then(res => {
            blog.save((err, data) => {
                if (err) {
                    console.log(errorHandler(err))
                }
                console.log(successHandler(data))
            })
        })
        .catch(error => {
            console.log(errorHandler(error))
        })
};

// CRUD = Read
exports.list = (req, res) => {
    // let order = req.query.order ? req.query.order : 'asc';
    // let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    // let limit = req.query.limit ? parseInt(req.query.limit) : 6;
    Blog.find()
        .exec((err, data) => {
            if (!err) {
                console.log(successHandler(data))
            }else{
                console.log(errorHandler(err))
            }
        });
};

exports.findById = (id) =>{
    Blog.findOne({_id: id})
        .then(res => console.log(successHandler(res)))
        .catch(error => console.log(errorHandler(error)))
}

// CRUD = Update
exports.update = (id,req)=>{
    const {title,author,body} = req.body;

    if(!title || !author || !body){
        console.log(errorHandler({message:'All fields are required'}))
    }

    Blog.updateOne({_id: id},
        {
            title:title,
            author:author,
            body:body,
            date : new Date()
        },(err,res)=>{
            if(!err){
                if(res && res.nModified > 0){
                    console.log(successHandler({message:'blog update successfully'}))
                }else{
                    console.log(errorHandler({message:"Id does not exist"}))
                }
            }else{
                console.log(errorHandler(err))
            }
        })

}

// CRUD = Destroy
exports.destroy = (id) => {
    if (!id) {
        Blog.remove({}, function (err) {
            if(!err){
                successHandler({message:"blog clean successfully"})
            }else{
                errorHandler(err)
            }
        });
    } else {
        Blog.remove({_id: id}, function (err) {
            if(!err){
                successHandler({message:"blog delete successfully"})
            }else{
                errorHandler(err)
            }
        });
    }
};

