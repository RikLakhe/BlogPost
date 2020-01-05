export const appConfig = {
    brand: 'test',
    year: 2020,
    color: {
        primary: '#3E2C87',
        secondary: '#348AA7',
        tertiary: '#C0FDFB',
        text: '#151515',
        unique: '#A63D40'
    }
};

export const API_URL = `${process.env.REACT_APP_REST_API_HOST}`;
export const BLOG_TOKEN = `blog-token`;

export const loadingOptions = {
    delay: 300, //0.3sec
    timeout: 10000, //10sec
};

export const INITIAL_STATE = {
    payload: [],
    loading: true,
    errors: {}
};

export const AUTH_CONFIG = {
    domain: 'riklakhe-1.auth0.com',
    clientId: 'z69oLVMik6bg5Vf27NN0h5tnjmzcuQ5S',
    callbackUrl: 'http://localhost:3000/#/login/',
    container: 'auth0-login-container'
}