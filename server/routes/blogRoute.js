import express from 'express';

import {addBlog, list, findById, update, remove} from '../controller/blogController'

const router = express.Router();

router.get("/",list);
router.post("/",addBlog);
router.get("/:blog_id",findById);
router.put("/:blog_id",update);

// router
//     .route('/:id')
//     .get((req, res, next) => {
//         findById(req,res,next,req.param.id)
//     })
//     .put((req, res, next) => {
//         res.status(200).send({
//             code: '200',
//             status: 'SUCCESS update'
//         })
//     })
//     .delete((req, res, next) => {
//         res.status(200).send({
//             code: '200',
//             status: 'SUCCESS delete'
//         })
//     })


module.exports = router;