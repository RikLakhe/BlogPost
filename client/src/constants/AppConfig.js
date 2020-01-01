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

<<<<<<< HEAD:client/src/constants/AppConfig.js
export const API_URL = `127.0.0.0:3002`;
=======
export const API_URL = `${process.env.REACT_APP_REST_API_HOST}`;
>>>>>>> master:fronttest/src/constants/AppConfig.js
export const BLOG_TOKEN = `blog-token`;

export const loadingOptions = {
    delay: 300, //0.3sec
    timeout: 10000, //10sec
};