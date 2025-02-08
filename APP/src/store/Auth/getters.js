import store from '@/store';
import jwtDecode from 'jwt-decode';

export default {
    getUser: (state) => {
        if (state.user !== null) {
            return state.user;
        }

        let user = localStorage.getItem("user");

        if (user != null) {
            user = JSON.parse(user);
            store.commit('Auth/setUser', user);
            return user;
        }

        return null;
    },

    getToken: (state) => {
        if (state.token !== null) {
            return state.token;
        }

        let token = localStorage.getItem('token');

        if (token != null) {
            try {
                const decoded = jwtDecode(token);

                // Se o token estiver expirado, remove do localStorage
                if (decoded.exp * 1000 < Date.now()) {
                    localStorage.removeItem('token');
                    store.commit('Auth/setToken', null);
                    return null;
                }

                store.commit('Auth/setToken', token);
                return token;
            } catch (error) {
                console.error("Token inválido:", error);
                localStorage.removeItem('token');
                store.commit('Auth/setToken', null);
                return null;
            }
        }

        return null;
    }
};
