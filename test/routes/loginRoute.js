import express from 'express';

const router = express.Router();

router.route('/')
    .post((req, res, next) => {
        res.status(200).send({
            code: '200',
            status: 'SUCCESS',
            data: {
                message: 'Product successfully added!'
            }
        })
    })

module.exports = router;