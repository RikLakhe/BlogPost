import React, {createContext, useState} from 'react';
import Auth0Lock from 'auth0-lock';

import {API_URL, BLOG_TOKEN, AUTH_CONFIG} from '../../../constants/appConfig';

const AuthContext = createContext({})

const AuthProvider = props => {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);

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

    const state = {authenticated};

    setSession = (authResult, profile) => {
        const session = {
            isAuthenticated: true,
            accessToken: authResult.accessToken,
            idToken: authResult.idToken,
            idTokenPayload: authResult.idTokenPayload,
            expiresAt: JSON.stringify(
                authResult.expiresIn * 1000 + new Date().getTime()
            ),
            profile: profile
        };

        this.setState(session, () => {
            this.lock.hide();
            this.scheduleRenewal();
            this.storeSession(session);
        });
    };

    const storeSession = session => {
        const { storageKey } = props;
        localStorage.setItem(storageKey, JSON.stringify(session));
    };

    const getStoredSession = () => {
        const { storageKey } = props;
        const session = localStorage.getItem(storageKey);
        return session ? JSON.parse(session) : null;
    };

    const isSessionExpired = expiresAt => {
        return new Date().getTime() > expiresAt;
    };

    const rehyrate = () => {
        const { showLock } = props;
        const session = getStoredSession();
        if (session && !isSessionExpired(session.expiresAt)) {
            setState(session, () => {
                scheduleRenewal();
            });
        } else {
            if (showLock) {
                lock.show();
            }
        }
    };

    const login = () => {
        lock.show();
    };

    const logout = returnTo => {
        const { storageKey } = props;
        localStorage.removeItem(storageKey);
        clearTimeout(tokenRenewalTimeout);
        lock.logout({
            returnTo: returnTo
        });
    };

    const scheduleRenewal = () => {
        const { expiresAt } = this.state;
        const delay = expiresAt - Date.now();
        if (delay > 0) {
            tokenRenewalTimeout = setTimeout(() => {
                renewToken();
            }, delay);
        }
    };

    const renewToken = () => {
        lock.checkSession({}, (err, authResult) => {
            if (err || !authResult) {
                lock.show();
            } else {
                lock.getUserInfo(authResult.accessToken, (error, profile) => {
                    setSession(authResult, profile);
                });
            }
        });
    };

    return (
        <AuthContext.Provider
            {...props}
            value={{
                ...state,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export {AuthProvider, AuthContext};
