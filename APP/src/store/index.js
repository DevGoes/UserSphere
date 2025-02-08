import { createStore } from 'vuex';
import Auth from './Auth/index';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        Auth
    },
    strict: debug
})