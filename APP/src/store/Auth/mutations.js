export default {
    setToken (state, token) {
        state.token = token;

        if (token != null) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    },

    setUser(state, user) {
        state.user = user;

        if (user != null) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    },
}