import { message } from 'antd';

import {fetch,store} from '../utils/httpsUtil.js'
import {
    blogFetchRequest,
    blogFetchRequestSuccess,
    blogFetchRequestFailure,
    blogFetchAllRequest,
    blogFetchAllRequestSuccess,
    blogFetchAllRequestFailure,
    singleBlogFetchRequest,
    singleBlogFetchRequestFailure,
    singleBlogFetchRequestSuccess,
    blogAddRequest,
    blogAddRequestSuccess,
    blogAddRequestFailure,
} from '../actions/blogAction'
import history from "../store/history";


message.config({
    top: 50,
    duration: 2,
    maxCount: 1,
});

/**
 * Fetch Blog
 *
 * @param {object} formData
 *
 * @return function(*):Promise<AxiosResponse<T>>
 */
export const fetchBlog = (formData) =>{
    return (dispatch)=>{
        dispatch(blogFetchRequest());

        return fetch('v1/blog/',formData)
            .then(response => {
                if(response.data.data.status === 'SUCCESS'){
                    dispatch(blogFetchRequestSuccess(response.data.data.data))
                }else{
                    // TODO
                }
            })
            .catch(error =>{
                dispatch(blogFetchRequestFailure(error.response.data.data));
                message.error(error.response.data.data.message);
            });
    };
};


/**
 * Fetch Blog by ID
 *
 * @param {string} id
 *
 * @return function(*):Promise<AxiosResponse<T>>
 */
export const fetchBlogByIdentifier = (id) =>{
    return (dispatch)=>{
        dispatch(singleBlogFetchRequest());

        return fetch(`v1/blog/${id}`)
            .then(response => {
                if(response.data.data.status === 'SUCCESS'){
                    dispatch(singleBlogFetchRequestSuccess(response.data.data.data[0]))
                }else{
                    // TODO
                }
            })
            .catch(error =>{
                dispatch(singleBlogFetchRequestFailure(error.response.data.data));
            });
    };
};

/**
 * Fetch Blog by Criteria
 *
 * @param {object} formData
 *
 * @return function(*):Promise<AxiosResponse<T>>
 */
export const fetchBlogByCriteria = (formData) =>{
    return (dispatch)=>{
        dispatch(blogFetchAllRequest());

        return store(`v1/blog/find`,formData)
            .then(response => {
                if(response.data.data.status === 'SUCCESS'){
                    dispatch(blogFetchAllRequestSuccess(response.data.data.data))
                }else{
                    // TODO
                }
            })
            .catch(error =>{
                dispatch(blogFetchAllRequestFailure(error.response.data.data));
                message.error(error.response.data.data.message);
            });
    };
};


/**
 * Add Blog
 *
 * @param {object} formData
 *
 * @return function(*):Promise<AxiosResponse<T>>
 */
export const addBlog = (formData) =>{
    return (dispatch)=>{
        dispatch(blogAddRequest());

        return store(`v1/blog`,formData)
            .then(response => {
                if(response.data.data.status === 'SUCCESS'){
                    dispatch(blogAddRequestSuccess(response.data.data.data[0]))
                    return response
                }else{
                    // TODO
                }
            })
            .catch(error =>{
                dispatch(blogAddRequestFailure(error.response.data.data))
            });
    };
};