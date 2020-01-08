import {
    BLOG_FETCH_REQUEST,
    BLOG_FETCH_REQUEST_SUCCESS,
    BLOG_FETCH_REQUEST_FAILURE,
    BLOG_FETCH_ALL_REQUEST,
    BLOG_FETCH_ALL_REQUEST_SUCCESS,
    BLOG_FETCH_ALL_REQUEST_FAILURE,
    BLOG_ADD_REQUEST,
    BLOG_ADD_REQUEST_SUCCESS,
    BLOG_ADD_REQUEST_FAILURE,
    SINGLE_BLOG_FETCH_REQUEST,
    SINGLE_BLOG_FETCH_REQUEST_SUCCESS,
    SINGLE_BLOG_FETCH_REQUEST_FAILURE,
    SINGLE_BLOG_UPDATE_REQUEST,
    SINGLE_BLOG_UPDATE_REQUEST_SUCCESS,
    SINGLE_BLOG_UPDATE_REQUEST_FAILURE,
    SINGLE_BLOG_DELETE_REQUEST,
    SINGLE_BLOG_DELETE_REQUEST_SUCCESS,
    SINGLE_BLOG_DELETE_REQUEST_FAILURE,
    CLEAN_BLOG_REQUEST,
    CLEAN_SINGLE_BLOG_REQUEST
} from '../constants/actionTypes';

import {
    INITIAL_STATE
} from '../constants/appConfig'

/**
 * A reducer takes two arguments, the current state and an action.
 *
 * Used Object.assign, it copies enumerable and own properties from a source object to a target object
 */
export const blogReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case BLOG_FETCH_REQUEST:
        case BLOG_FETCH_ALL_REQUEST:
        case BLOG_ADD_REQUEST:
            return Object.assign({}, state, {loading: true});

        case BLOG_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: state.payload.concat(action.data),
                loading: false,
                errors: {},
            });

            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case BLOG_FETCH_ALL_REQUEST_SUCCESS:
        case BLOG_ADD_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case BLOG_FETCH_REQUEST_FAILURE:
        case BLOG_FETCH_ALL_REQUEST_FAILURE:
        case BLOG_ADD_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error
            });

        case CLEAN_BLOG_REQUEST:
            return Object.assign({}, state, INITIAL_STATE);

        default:
            return state;

    }
};

export const singleBlogReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case SINGLE_BLOG_FETCH_REQUEST:
        case SINGLE_BLOG_UPDATE_REQUEST:
        case SINGLE_BLOG_DELETE_REQUEST:
            return Object.assign({}, state, {loading: true});

        case SINGLE_BLOG_FETCH_REQUEST_SUCCESS:
        case SINGLE_BLOG_UPDATE_REQUEST_SUCCESS:
        case SINGLE_BLOG_DELETE_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case SINGLE_BLOG_FETCH_REQUEST_FAILURE:
        case SINGLE_BLOG_UPDATE_REQUEST_FAILURE:
        case SINGLE_BLOG_DELETE_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error
            });

        case CLEAN_SINGLE_BLOG_REQUEST:
            return Object.assign({}, state, INITIAL_STATE);

        default:
            return state;

    }
};