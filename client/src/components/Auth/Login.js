import React from 'react';
import { Redirect } from 'react-router-dom';
import Lock from './Lock';
import isAuthenticated from "../../utils/jwtUtil";

const Login = (props) => (
    isAuthenticated() ? (
        <Redirect to="/" />
    ) : (
        <Lock location={props.location} />
    )
)

export default Login;