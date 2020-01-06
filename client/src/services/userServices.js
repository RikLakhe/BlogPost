import {message} from "antd";

import {store} from '../utils/httpsUtil.js'

import {
    userUpdateRequest,
    userUpdateRequestSuccess,
    userUpdateRequestFailure
} from '../actions/userAction'

/**
 * Update User
 *
 * @param {object} formData
 * @param {string} id
 *
 * @return function(*):Promise<AxiosResponse<T>>
 */
export const updateUser = (formData,id) => {
    return (dispatch)=>{
        dispatch(userUpdateRequest());

        return store(`v1/user/${id}`, JSON.stringify(formData))
            .then(response => {
                if(response.data.data.status === 'SUCCESS'){
                    dispatch(userUpdateRequestSuccess(response.data.data.data));
                    message.success("Success");
                    return response
                }else{
                    // TODO
                }
            })
            .catch(error =>{
                dispatch(userUpdateRequestFailure(error.response.data.data));
                message.error(error.response.data.data.message);
            });
    };
};