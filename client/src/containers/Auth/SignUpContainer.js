import React, {Fragment} from 'react';

import SignUp from "../../components/Auth/SignUp";
import {addUser} from "../../services/UserServices";

const SignUpContainer = props => {
    /**
     * Add new user
     *
     * @param {object} formData
     */
    const addUserContainer = (formData) => {
        addUser(formData);
    };

    return (
        <SignUp
            {...props}
            addUserContainer={addUserContainer}
        />
    )
};

export default SignUpContainer;