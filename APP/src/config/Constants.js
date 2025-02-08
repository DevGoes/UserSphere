export default {
    apiBaseUrl() {
        return import.meta.env.APP_NODE_ENV === 'production'
            ? 'https://usersphere/api/v1'
            : 'http://localhost:8000/api/v1';
    }
}
