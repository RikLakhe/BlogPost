import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import {
    blogReducer,
    singleBlogReducer,
} from './blogReducer';

const appReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        blog: blogReducer,
        singleBlog: singleBlogReducer,
    });

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;