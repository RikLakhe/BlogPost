import {applyMiddleware, compose, createStore} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'connected-react-router';

import createRootReducer from '../reducers';

function configureStoreDev(initialState = {}, history) {

    // Add middleware
    // 1. Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
    // 2. thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    // 3. routerMiddleware: Syncs the location/URL path to the state

    const middlewares = [reduxImmutableStateInvariant(), thunk, routerMiddleware(history)];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
    const store = createStore(
        createRootReducer,
        initialState, composeEnhancers(
            applyMiddleware(...middlewares)
        )
    );

    return store;
}


export default configureStoreDev;