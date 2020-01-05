import React, {Component, useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';
import Auth0Lock from 'auth0-lock';
import { AUTH_CONFIG } from './auth0-config';

// lock has 3 responsibilities,
// 1.show login form with lock.show
// 2.issue sessions after authentication
// 3.redirect to home page after sessions issued
const Lock = props =>{
    const [loggedIn, setLoggedIn] = useState(false);

    const lock = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, {
        auth: {
            responseType: 'token id_token',
            sso: false,
        },
        container: AUTH_CONFIG.container,
        theme: {
            primaryColor: '#3a99d8'
        },

    });

    const onAuthenticated = () => {
        lock.on('authenticated', (authResult) => {
            let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
            localStorage.setItem('access_token', authResult.accessToken);
            localStorage.setItem('id_token', authResult.idToken);
            localStorage.setItem('expires_at', expiresAt);

           setLoggedIn(true)
        });
    }

    useEffect(()=>{
        if(!(/access_token|id_token|error/.test(props.location.hash))){
            lock.show();
        }
    })

    return(
        !loggedIn ? (
            <div>
                <div id={AUTH_CONFIG.container} style={{marginTop: '12px' }}/>
            </div>
        ):(
            <Redirect to={{
                pathname: '/',
                state: { from: props.location }
            }} />
        )
    )
};

export default Lock;