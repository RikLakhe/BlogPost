import express from 'express';
import request from 'request-promise'

import {errorHandler, successHandler} from "../utils/dbMessageHandler";
const router = express.Router();


router.post("/:user_id",(req,res,next)=>{
    if(req.params.user_id && res.locals.token && req.body){
        let updateOptions = {
            method: 'PATCH',
            url: `https://riklakhe-1.auth0.com/api/v2/users/${req.params.user_id}`,
            headers: {
                'content-type': 'application/json',
                'Authorization' : res.locals.token,
            },
            body:`${JSON.stringify(req.body)}`
        };

        request(updateOptions).then(response => {
            res.status(200).send(successHandler({message: 'User was updated successfully'}));
        }).catch(err => {
            res.status(404).json({
                error: errorHandler(err)
            });
        })
    }
});

module.exports = router;