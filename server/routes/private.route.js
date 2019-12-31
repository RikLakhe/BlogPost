import express from 'express';

const router = express.Router();

router.route("/").get((res,req,next)=>{
    res.status(200).send({
        code: '200',
        status: 'private route',
    })
    next()
})

module.exports = router;