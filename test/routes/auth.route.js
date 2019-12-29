import express from 'express'

const router = express.Router()

router.use((res,req,next)=>{
    console.log('gagagag');
    next();
})

module.exports = router;