import request from 'request'

import config from "../config/appConfig";

let options = { method: 'POST',
    url: 'https://riklakhe-1.auth0.com/oauth/token',
    headers: { 'content-type': 'application/json' },
    body: '{"client_id":"ucYhmzBs8lhFDweKJWlZfe4O821kSKF8","client_secret":"8Fz53M9pRb7cLb5kKwZJmZdO87bux2DiTmIWRfseI9w4Qw85KwjfketUEm0x3bvd","audience":"https://riklakhe-1.auth0.com/api/v2/","grant_type":"client_credentials"}' };

export const accessM2M =(req,res,next)=>{
    request(options, function (error, response, body) {
        if (error){
            console.log('here',error)
        }
        let temp = JSON.parse(body);
        res.set("Authorization",`${temp.token_type} ${temp.access_token}`);
    });
    next();
}