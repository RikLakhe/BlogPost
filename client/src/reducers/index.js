import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import history from '../store/history';
import {
    blogReducer,
    singleBlogReducer,
} from './blogReducer';

const appReducer = combineReducers({
        router: connectRouter(history),
        blog: blogReducer,
        singleBlog: singleBlogReducer,
    });

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;