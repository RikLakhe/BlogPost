import express from 'express';

import BlogRoute from './blogRoute'
import LoginRoute from './loginRoute'
import UserRoute from './userRoute'

const router = express.Router();

router.use("/auth",LoginRoute);
router.use("/user",UserRoute);
router.use("/blog",BlogRoute);

module.exports = router;