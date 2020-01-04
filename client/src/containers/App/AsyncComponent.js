import loadable from 'react-loadable';
import Loading from "../../components/Layout/Loading";

import {loadingOptions} from "../../constants/appConfig";

export const AsyncAppLayout = loadable({
    loader: () => import('../../containers/Layout'),
    loading: Loading,
    ...loadingOptions
});

export const AsyncHome = loadable({
    loader: () => import('../Home'),
    loading: Loading,
    ...loadingOptions
});

export const AsyncBlog = loadable({
    loader: () => import('../Blog'),
    loading: Loading,
    ...loadingOptions
});

export const AsyncAuth = loadable({
    loader: () => import('../../containers/Auth'),
    loading: Loading,
    ...loadingOptions
});

export const AsyncException = loadable({
    loader: () => import('../../containers/Exception/Error'),
    loading: Loading,
    ...loadingOptions
});