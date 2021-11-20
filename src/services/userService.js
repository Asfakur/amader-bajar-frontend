import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + "/api/users";

export function register(user) {
    return http.post(apiEndpoint, {
        name: user.name,
        email: user.email,
        password: user.password,
        phone: user.phone
    })
}

export function getCustomer(id) {
    return http.get(apiEndpoint + '/' + id);
}