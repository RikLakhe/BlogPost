import loadable from 'react-loadable';
import Loading from "../../component/Layout/Loading";

import {loadingOptions} from "../../constants/AppConfig";

export const AsyncAppLayout = loadable({
    loader: () => import('./AppLayoutContainer'),
    loading: Loading,
    ...loadingOptions
});

export const AsyncBlog = loadable({
    loader: () => import('./../Blogs/'),
    loading: Loading,
    ...loadingOptions
});
