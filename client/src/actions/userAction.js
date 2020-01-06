import {
    USER_UPDATE_REQUEST,
    USER_UPDATE_REQUEST_SUCCESS,
    USER_UPDATE_REQUEST_FAILURE
} from '../constants/actionTypes'

export const userUpdateRequest =()=>{
    return{
        type: USER_UPDATE_REQUEST
    }
};

export const userUpdateRequestSuccess =(data)=>{
    return{
        type: USER_UPDATE_REQUEST_SUCCESS,
        data
    }
};

export const userUpdateRequestFailure =(error)=>{
    return{
        type: USER_UPDATE_REQUEST_FAILURE,
        error
    }
};