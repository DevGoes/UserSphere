import apiRequest from "@/services/index.js";

export default {

    getUserById: (id) => apiRequest.get(`/users`, {
        id
    }),

    updateUser: (id, data) => apiRequest.put(`/users/${id}`, data),

};
