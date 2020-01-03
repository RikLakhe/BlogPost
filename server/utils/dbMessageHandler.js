/**
 * Get the error message from error object
 */
exports.errorHandler = (error) =>{
    let errorBody = {
        message : ""
    };

    errorBody.message = error.message ? error.message.replace(/^./, error.message[0].toUpperCase()) : error;

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