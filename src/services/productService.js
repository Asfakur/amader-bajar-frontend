import http from './httpService';
import { apiUrl } from '../config.json';

export function getProducts() {
    return http.get(apiUrl + '/api/products');
}

export function deleteProduct(productId) {
    return http.delete(apiUrl + '/api/products/' + productId);
}