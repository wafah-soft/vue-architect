import store from '@/store';

const guards = {

    requireAuth: (to, from, next) => {
        if (store.getters["auth/isAuthenticated"]) {
            next();
        } else {
            next({ name: "login" });
        }
    },

    requireGuest: (to, from, next) => {
        if (!store.getters['auth/isAuthenticated']) {
            next();
        }
        else {
            next({ name: 'dashboard' });
        }
    }

}


export default guards;