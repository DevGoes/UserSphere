import axios from '.'

export default {
    login: (payload) => axios.post('auth/login', payload),
    logout: () => axios.get('auth/logout'),
    register: (payload) => axios.post('auth/register', payload),
}