import AuthService from '@/services/Auth.js'

export default {
    async login ({ commit }, payload) {
        await AuthService.login(payload)
            .then(response => {
                commit('setToken', response.data.access_token)
                commit('setUser', response.data.user)
            });
    },

    async logout ({ commit }) {
        await AuthService.logout()
            .then(() => {
                commit('setToken', null);
                commit('setUser', null);
            })
    }
}