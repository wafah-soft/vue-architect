const state = {
    user: null,
    token: null
};

const mutations = {
    SET_USER(state, user) {
        state.user = user;
    },

    SET_TOKEN(state, token) {
        state.token = token;
    }
};

const getters = {
    isAuthenticated: state => !!state.token
}


const actions = {
    async login({ commit }, { username, password }) {
        if (username && password) {
            commit('SET_USER', { id: 1, name: 'Jhon' });
            commit('SET_TOKEN', 'sample-token');
        }
    },

    logout({ commit }) {
        commit('SET_USER', null);
        commit('SET_TOKEN', null);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};