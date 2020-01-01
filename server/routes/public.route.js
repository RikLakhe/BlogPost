import express from 'express';

import BlogRoute from './blogRoute';

const router = express.Router();

router.use("/blog",BlogRoute)

module.exports = router;