export default {
    apiBaseUrl() {
        return import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';
    }
}
