import React, {Suspense} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';

import "./styles/normalize.css"

import configureStore from './store/configureStore';
import history from './store/history.js';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import config from "./constants/auth_config";

import {Auth0Provider} from './components/Context/Auth0Context/react-auth0-spa';

const store = configureStore({}, history);

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
    history.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
};

render(
    <Suspense fallback={null}>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Router basename={process.env.PUBLIC_URL} history={history}>
                    <Auth0Provider
                        domain={config.domain}
                        client_id={config.clientId}
                        redirect_uri={window.location.origin}
                        onRedirectCallback={onRedirectCallback}
                    >
                        <App/>
                    </Auth0Provider>
                </Router>
            </ConnectedRouter>
        </Provider>
    </Suspense>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
