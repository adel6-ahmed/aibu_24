import http from './http';
import config from '../config';

const createUser = (userData) => http.post(`${config.apiUrl}/users`, userData);
const loginUser = (loginData) => http.post(`${config.apiUrl}/auth`, loginData);

const usersApi = {
    createUser,
    loginUser
};

export default usersApi;
