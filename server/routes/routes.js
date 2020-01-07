import express from 'express';

import accessM2M from '../middleware/M2MMiddleware.js'

import BlogRoute from './blogRoute'
import UserRoute from './userRoute'

const router = express.Router();

router.use("/user",accessM2M,UserRoute);
router.use("/blog",BlogRoute);

module.exports = router;