import {
    BLOG_FETCH_REQUEST,
    BLOG_FETCH_REQUEST_SUCCESS,
    BLOG_FETCH_REQUEST_FAILURE
} from '../constants/actionTypes';

import {
    INITIAL_STATE
} from '../constants/AppConfig'

/**
 * A reducer takes two arguments, the current state and an action.
 *
 * Used Object.assign, it copies enumerable and own properties from a source object to a target object
 */
export const blogReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case BLOG_FETCH_REQUEST:
            return Object.assign({}, state, {loading: true});

        case BLOG_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case BLOG_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: action.error
            });

        default:
            return state;

    }
};