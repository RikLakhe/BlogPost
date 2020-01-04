import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import {blogReducer} from './blogReducer';

const appReducer = (history) =>
    combineReducers({
        router : connectRouter(history),
        blog : blogReducer
    });

const rootReducer = (state, action) => {

    return appReducer(state, action);
};

export default rootReducer;