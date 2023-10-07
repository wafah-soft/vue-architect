import api from './api.service';

export default {
    login(credentials) {
        return api.post('/login', credentials);
    },

    logout() {
        return api.post('/logout');
    }
};