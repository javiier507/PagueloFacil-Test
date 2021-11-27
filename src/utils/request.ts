import { axios } from '../libraries/http-request';

import { API_URL } from '../utils/environment';
import { TOKEN_API } from '../constants';

const http = axios.create({
    baseURL: API_URL,
});

http.interceptors.request.use(
    function (config) {
        if (config.headers) {
            config.headers.Authorization = TOKEN_API;
        }
        return config;
    },
    function (err) {
        return Promise.reject(err);
    },
);

export { http };
