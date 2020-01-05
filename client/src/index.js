import React, {Suspense} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';

import "./styles/normalize.css"

import history from './store/history.js';
import configureStore from './store/configureStore';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import {AuthProvider} from './components/Context/AppContext/AuthContext';

const store = configureStore({}, history);

render(
    <Suspense fallback={null}>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Router basename={process.env.PUBLIC_URL} history={history}>
                    <AuthProvider>
                        <App/>
                    </AuthProvider>
                </Router>
            </ConnectedRouter>
        </Provider>
    </Suspense>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
