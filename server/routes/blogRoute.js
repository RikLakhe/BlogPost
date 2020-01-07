import express from 'express';

import {
    addBlog,
    list,
    findById,
    findByCriteria,
    update,
    updateComment,
    removeAll,
    remove
} from '../controller/blogController'

const router = express.Router();

router.get("/", list);
router.post("/", addBlog);
router.post("/find", findByCriteria);
router.get("/:blog_id", findById);
router.put("/:blog_id", update);
router.put("/comment/:blog_id", updateComment);
router.delete("/all", removeAll);
router.delete("/:blog_id", remove);

module.exports = router;