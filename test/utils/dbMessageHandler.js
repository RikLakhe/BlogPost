/**
 * Get the error message from error object
 */
exports.errorHandler = (error) =>{
    let errorBody = {
        message : ""
    };

    errorBody.message = error.message.charAt(0).toUpperCase()+error.message.splice(1);

    return errorBody
};

/**
 * Get the success message from response object
 */
exports.successHandler = (response) =>{
    return {
        status:'SUCCESS',
        data:response
    }
};