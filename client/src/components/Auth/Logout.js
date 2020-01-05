import React, {Component, useEffect} from 'react';
import { Redirect } from 'react-router-dom';

const Logout = props =>{

    useEffect(()=>{
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
    });

        return (
            <Redirect to={{
                pathname: '/login',
                state: { from: this.props.location }
            }} />
        );
};

export default Logout;
