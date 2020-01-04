import {
    BLOG_FETCH_REQUEST,
    BLOG_FETCH_REQUEST_SUCCESS,
    BLOG_FETCH_REQUEST_FAILURE,
    BLOG_ADD_REQUEST,
    BLOG_ADD_REQUEST_FAILURE,
    BLOG_ADD_REQUEST_SUCCESS,
    BLOG_DELETE_REQUEST,
    BLOG_DELETE_REQUEST_FAILURE,
    BLOG_DELETE_REQUEST_SUCCESS,
    BLOG_UPDATE_REQUEST,
    BLOG_UPDATE_REQUEST_FAILURE,
    BLOG_UPDATE_REQUEST_SUCCESS,
    SINGLE_BLOG_FETCH_REQUEST,
    SINGLE_BLOG_FETCH_REQUEST_SUCCESS,
    SINGLE_BLOG_FETCH_REQUEST_FAILURE,
    CLEAN_BLOG_REQUEST,
    CLEAN_SINGLE_BLOG_REQUEST,
} from '../constants/actionTypes'

export const blogFetchRequest =()=>{
    return{
        type: BLOG_FETCH_REQUEST
    }
};

export const blogFetchRequestSuccess =(data)=>{
    return{
        type: BLOG_FETCH_REQUEST_SUCCESS,
        data
    }
};

export const blogFetchRequestFailure =(error)=>{
    return{
        type: BLOG_FETCH_REQUEST_FAILURE,
        error
    }
};

export const singleBlogFetchRequest =()=>{
    return{
        type: SINGLE_BLOG_FETCH_REQUEST
    }
};

export const singleBlogFetchRequestSuccess =(data)=>{
    return{
        type: SINGLE_BLOG_FETCH_REQUEST_SUCCESS,
        data
    }
};

export const singleBlogFetchRequestFailure =(error)=>{
    return{
        type: SINGLE_BLOG_FETCH_REQUEST_FAILURE,
        error
    }
};

export const blogAddRequest =()=>{
    return{
        type: BLOG_ADD_REQUEST
    }
};

export const blogAddRequestSuccess =(data)=>{
    return{
        type: BLOG_ADD_REQUEST_SUCCESS,
        data
    }
};

export const blogAddRequestFailure =(error)=>{
    return{
        type: BLOG_ADD_REQUEST_FAILURE,
        error
    }
};

// Clean blog
export const cleanBlogRequest =()=>{
    return{
        type: CLEAN_BLOG_REQUEST,
    }
};

// Clean single blog
export const cleanSingleBlogRequest =()=>{
    return{
        type: CLEAN_SINGLE_BLOG_REQUEST,
    }
};