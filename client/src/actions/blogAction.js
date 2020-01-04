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
    SINGLE_BLOG_FETCH_REQUEST_FAILURE,
    SINGLE_BLOG_FETCH_REQUEST_SUCCESS
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