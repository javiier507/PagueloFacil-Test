import { axios } from '../libraries/http-request';

import { API_URL, API_TOKEN } from '../utils/environment';

const http = axios.create({
    baseURL: API_URL?.toString()
});

http.interceptors.request.use(
    function (config) {
        if (config.headers && API_TOKEN) {
            config.headers.Authorization = API_TOKEN.toString();
        }
        return config;
    },
    function (err) {
        return Promise.reject(err);
    },
);

export { http };
