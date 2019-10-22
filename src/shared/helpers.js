import axios from 'axios';
import { URL } from './constans';

const axiosInstance = axios.create({
    baseURL: URL,
    // timeout: 100,
});

export {
    axiosInstance
};