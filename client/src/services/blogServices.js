import {fetch} from '../utils/httpsUtil.js'

import {
    blogFetchRequest,
    blogFetchRequestSuccess,
    blogFetchRequestFailure,
    singleBlogFetchRequest,
    singleBlogFetchRequestFailure,
    singleBlogFetchRequestSuccess,
    blogAddRequest,
    blogAddRequestSuccess,
    blogAddRequestFailure,
} from '../actions/blogAction'
import {store} from "../utils/httpsUtil";

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
                dispatch(blogFetchRequestFailure(error.data))
            });
    };
};

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
                dispatch(singleBlogFetchRequestFailure(error.data))
            });
    };
};

export const addBlog = (formData) =>{
    return (dispatch)=>{
        dispatch(blogAddRequest());

        return store(`v1/blog`,formData)
            .then(response => {
                if(response.data.data.status === 'SUCCESS'){
                    dispatch(blogAddRequestSuccess(response.data.data.data[0]))
                }else{
                    // TODO
                }
            })
            .catch(error =>{
                dispatch(blogAddRequestFailure(error.data))
            });
    };
};