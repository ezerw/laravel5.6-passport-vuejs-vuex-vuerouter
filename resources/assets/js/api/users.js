import axios from 'axios';

export default {
    fetchAll() {
        return axios.get('users');
    },
    fetchOne(user_id) {
        return axios.get(`users/${user_id}`);
    },
    create(payload) {
        return axios.post('users', payload);
    }
};