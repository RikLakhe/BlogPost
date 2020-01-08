import request from 'request-promise'

import config from "../config/appConfig";
import {errorHandler} from "../utils/dbMessageHandler";

let options = {
    method: 'POST',
    url: config.M2Murl,
    headers: config.headers,
    body: config.M2Mbody
};

const accessM2M = (req, res, next) => {
    request(options).then(response => {
        let temp = JSON.parse(response);
        if (temp) {
            res.locals.token = `${temp.token_type} ${temp.access_token}`;
            next();
        }
    }).catch(err => {
        return res.status(404).json({
            error: errorHandler(err)
        });
    })
};

export default accessM2M;