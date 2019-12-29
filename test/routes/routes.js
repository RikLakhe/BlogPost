import express from 'express';

<<<<<<< HEAD
import BlogRoute from './blogRoute'
import LoginRoute from './loginRoute'
import UserRoute from './userRoute'

const router = express.Router();

router.use("/login",LoginRoute);
router.use("/users",UserRoute);
router.use("/blog",BlogRoute);

module.exports = router;