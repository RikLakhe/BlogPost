import express from 'express';

const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        res.status(200).send({
            code: '200',
            status: 'SUCCESS get all',
        })
    })
    .post((req, res, next) => {
        res.status(200).send({
            code: '200',
            status: 'SUCCESS',
            data: {
                message: 'Product successfully added!'
            }
        })
    })

router
    .route('/:id')
    .get((req, res, next) => {
        res.status(200).send({
            code: '200',
            status: 'SUCCESS id get',
        })
    })
    .put((req, res, next) => {
        res.status(200).send({
            code: '200',
            status: 'SUCCESS update'
        })
    })
    .delete((req, res, next) => {
        res.status(200).send({
            code: '200',
            status: 'SUCCESS delete'
        })
    })


module.exports = router;