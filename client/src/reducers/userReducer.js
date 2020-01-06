import {
    USER_UPDATE_REQUEST,
    USER_UPDATE_REQUEST_SUCCESS,
    USER_UPDATE_REQUEST_FAILURE
} from '../constants/actionTypes';

import {
    INITIAL_STATE
} from '../constants/appConfig'

/**
 * A reducer takes two arguments, the current state and an action.
 *
 * Used Object.assign, it copies enumerable and own properties from a source object to a target object
 */
const userReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case USER_UPDATE_REQUEST:
            return Object.assign({}, state, {loading: true});

        case USER_UPDATE_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case USER_UPDATE_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error
            });

        default:
            return state;

    }
};

export default userReducer;