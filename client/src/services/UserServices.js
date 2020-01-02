import {store} from '../utils/httpsUtil.js'

export const addUser = (formData) => {
    return store('v1/user/', formData)
        .then(res => {
            console.log('in service response', res)
        })
        .catch(err => {
            console.log('in service error',err)
        });
};