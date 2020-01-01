import React, {createContext, useState} from 'react';
import axios from "axios";

import {API_URL,BLOG_TOKEN} from './../../../constants/AppConfig';

const AuthContext = createContext({
    authenticated: false,
    loading: false,
})

const AuthProvider = props => {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);
    const state = {authenticated};

    const signIn = formData => {
        return axios.post(`http://${API_URL}/v1/auth/sign-in`, formData, {credentials: true})
            .then(res => {
                // localStorage.setItem(BLOG_TOKEN, res.data.data.token);
                console.log('here',res)
                setAuthenticated(true);
                return res
            })
    };

    const signOut = () => {
        console.log('Signed out');
        // localStorage.removeItem(BLOG_TOKEN);
        setAuthenticated(false);
    };

    return (
        <AuthContext.Provider
            {...props}
            value={{
                ...state,
                signIn: signIn,
                signOut: signOut,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export {AuthProvider, AuthContext};
