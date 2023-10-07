import axios from 'axios';

const service = axios.create({
    baseURL: process.env.VUE_APP_API_ENDPOINT || 'http://0.0.0.0:8000',
    timeout: 5000
});

export default service;