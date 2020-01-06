import express from 'express';

const router = express.Router();

import {accessM2M} from '../middleware/M2MCommunication.js'

router.get("/",(res,req,next,temp)=>{
    console.log('user',temp)
})

module.exports = router;