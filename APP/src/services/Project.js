import apiRequest from "@/services/index.js";

export default {
    getAllProjects: () => apiRequest.get(`/projects`),

    getProjectById: (id) => apiRequest.get(`/projects/${id}`),

    createProject: (data) => apiRequest.post(`/projects`, data),

    updateProject: (id, data) => apiRequest.put(`/projects/${id}`, data),

    deleteProject: (id) => apiRequest.delete(`/projects/${id}`)
};
