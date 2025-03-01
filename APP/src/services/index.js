import axios from "axios";
import constants from "@/config/Constants.js";

const apiRequest = axios.create({
    baseURL: constants.apiBaseUrl()
});

apiRequest.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default apiRequest;
