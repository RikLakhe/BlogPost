import React, {Suspense} from 'react';
import {render} from 'react-dom';
import {HashRouter as Router} from "react-router-dom";

import "./styles/normalize.css"

import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import { AuthProvider } from './components/Context/AppContext/AuthContext';

render(
    <Suspense fallback={null}>
        <Router basename={process.env.PUBLIC_URL}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </Router>
    </Suspense>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
