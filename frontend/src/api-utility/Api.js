import axios from 'axios';
const BASE_URL = 'https://frontend-take-home-service.fetch.com';

class Api {
    static async request(endpoint, data = {}, method = 'get') {
        try {
            const url = `${BASE_URL}/${endpoint}`;
            const params = method === 'get' ? data : {};

            return (await axios({ url, method, data, params, withCredentials: true })).data;
        } catch (err) {
            console.error('API Error:', err);
        }
    }

    static async login(user) {
        try {
            const { name, email } = user;
            const response = await this.request('auth/login', { name, email }, 'post');
            console.log('api response', response);
            return response;
        } catch (err) {
            console.error('API Error:', err);
        }
    }

    static async logout() {
        try {
            const response = await this.request('auth/logout', {}, 'post');
            return response;
        } catch (err) {
            console.error('API Error:', err);
        }
    }
}

export default Api;
