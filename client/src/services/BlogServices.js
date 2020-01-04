import {fetch} from '../utils/httpsUtil.js'

import {
    blogFetchRequest,
    blogFetchRequestSuccess,
    blogFetchRequestFailure
} from '../actions/blogAction'

export const fetchBlog = (formData) =>{
    return (dispatch)=>{
        dispatch(blogFetchRequest);

        return fetch('v1/blog/',formData)
            .then(response => {
                console.log("response in front end",response);
            })
            .catch(error =>{
                console.log("error in front end",error)
            });
    };
};