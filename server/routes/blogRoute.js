import express from 'express';

import {
    addBlog,
    list,
    findById,
    findByCriteria,
    update,
    updateComment,
    removeAll,
    remove,
    updateReply
} from '../controller/blogController'

const router = express.Router();

router.get("/", list);
router.post("/", addBlog);
router.post("/find", findByCriteria);
router.get("/:blog_id", findById);
router.put("/:blog_id", update);
router.put("/comment/:blog_id", updateComment);
router.put("/comment/:blog_id/:comment_id", updateReply);
router.delete("/all", removeAll);
router.delete("/:blog_id", remove);

module.exports = router;