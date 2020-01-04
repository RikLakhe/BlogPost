import axios from 'axios';

import {API_URL,BLOG_TOKEN} from '../constants/appConfig'

const http = () => {
    // Create axios for http request GET, POST, PUT AND DELETE
    const api = axios.create({
        baseURL: `http://${API_URL}/`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        responseType: 'json',
    })

    // Add a request interceptor
    api.interceptors.response.use(
        response => {
            console.log('gggg response is here',response);
            return response;
        },
        error => {
            console.log('error in httpsUtil interceptors',error);
            return Promise.reject(error);
        }
    );

    return api;
};

export const fetch = (endpoint, params) => {
    return http()
        .get(`/${endpoint}`, { params });
};

export const store = (endpoint, data) => {
    return http()
        .post(`/${endpoint}`, data);
};

export const update = (endpoint, data) => {
    return http()
        .put(`/${endpoint}`, data);
};

export const destroy = (endpoint, id) => {
    return http()
        .delete(`/${endpoint}/${id}`);
};