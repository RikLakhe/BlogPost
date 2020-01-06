import express from 'express';

import {accessM2M} from '../middleware/M2MCommunication.js'

import BlogRoute from './blogRoute'
import LoginRoute from './loginRoute'
import UserRoute from './userRoute'

const router = express.Router();

router.use("/auth",LoginRoute);
router.use("/user",accessM2M,UserRoute);
router.use("/blog",BlogRoute);

module.exports = router;