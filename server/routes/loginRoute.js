import express from 'express';

const router = express.Router();

router.route('/sign-in')
    .post((req, res, next) => {
        console.log('ggg',req)
        res.status(200).send({
            code: '200',
            status: 'SUCCESS',
            data: {
                message: 'Product successfully added!'
            }
        })
    })

module.exports = router;