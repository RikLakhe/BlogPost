import Blog from './blogModel'

// Create
exports.addBlog = (req,res,next)=>{
    const blog = new Blog(req.body)
    blog.save((err,data)=>{
        if(err){
            console.log('Error',err)
        }
        res.json({data})
    })
}

// Read

// Update

//Delete
