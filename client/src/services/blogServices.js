import { message } from 'antd';

import {fetch,store,update,destroy} from '../utils/httpsUtil.js'
import {
    blogFetchRequest,
    blogFetchRequestSuccess,
    blogFetchRequestFailure,
    blogFetchAllRequest,
    blogFetchAllRequestSuccess,
    blogFetchAllRequestFailure,
    blogAddRequest,
    blogAddRequestSuccess,
    blogAddRequestFailure,
    singleBlogFetchRequest,
    singleBlogFetchRequestFailure,
    singleBlogFetchRequestSuccess,
    singleBlogUpdateRequest,
    singleBlogUpdateRequestSuccess,
    singleBlogUpdateRequestFailure,
    singleBlogDeleteRequest,
    singleBlogDeleteRequestSuccess,
    singleBlogDeleteRequestFailure,
} from '../actions/blogAction'

message.config({
    top: 100,
    duration: 2,
    maxCount: 3,
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

/**
 * Update Blog
 *
 * @param {object} formData
 * @param {string} id
 *
 * @return function(*):Promise<AxiosResponse<T>>
 */
export const updateBlog = (formData,id) => {
    return (dispatch)=>{
        dispatch(singleBlogUpdateRequest());

        return  update(`v1/blog/${id}`, formData)
            .then(response => {
                if(response.data.data.status === 'SUCCESS'){
                    message.success("Successfully Updated", 10);
                    dispatch(singleBlogUpdateRequestSuccess(response.data.data.data[0]))
                }else{
                    // TODO
                }
            })
            .catch(error =>{
                dispatch(singleBlogUpdateRequestFailure(error.response.data.error.message));
                message.error(error.response.data.error.message);
            });
    };
};

/**
 * Add Blog Comment
 *
 * @param {object} formData
 * @param {string} blogId
 *
 * @return function(*):Promise<AxiosResponse<T>>
 */
export const addBlogComment = (formData,blogId) => {
    return (dispatch)=>{
        dispatch(singleBlogUpdateRequest());

        return  update(`v1/blog/comment/${blogId}`, formData)
            .then(response => {
                if(response.data.data.status === 'SUCCESS'){
                    dispatch(singleBlogUpdateRequestSuccess(response.data.data.data[0]))
                }else{
                    // TODO
                }
            })
            .catch(error =>{
                dispatch(singleBlogUpdateRequestFailure(error.response.data.data));
            });
    };
};


/**
 * Add Blog Reply to Comment
 *
 * @param {object} formData
 * @param {string} blogId
 * @param {string} commentId
 *
 * @return function(*):Promise<AxiosResponse<T>>
 */
export const addBlogCommentReply = (formData,blogId,commentId) => {
    return (dispatch)=>{
        dispatch(singleBlogUpdateRequest());

        return  update(`v1/blog/comment/${blogId}/${commentId}`, formData)
            .then(response => {
                if(response.data.data.status === 'SUCCESS'){
                    dispatch(singleBlogUpdateRequestSuccess(response.data.data.data[0]))
                }else{
                    // TODO
                }
            })
            .catch(error =>{
                dispatch(singleBlogUpdateRequestFailure(error.response.data.data));
            });
    };
};



/**
 * Delete Blog
 *
 * @param {string} blogId
 *
 * @return function(*):Promise<AxiosResponse<T>>
 */
export const deleteBlog = (blogId) => {
    return (dispatch)=>{
        dispatch(singleBlogDeleteRequest());

        return  destroy(`v1/blog`,blogId)
            .then(response => {
                if(response.data.data.status === 'SUCCESS'){
                    dispatch(singleBlogDeleteRequestSuccess(response.data.data.data[0]))
                }else{
                    // TODO
                }
            })
            .catch(error =>{
                dispatch(singleBlogDeleteRequestFailure(error.response.data.error.message));
                message.error(error.response.data.error.message);
            });
    };
};