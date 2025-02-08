import apiRequest from "@/services/index.js";

export default {
    getTasksByProject: (projectId) => apiRequest.get(`/projects/${projectId}/tasks`),

    getTaskById: (projectId, taskId) => apiRequest.get(`/projects/${projectId}/tasks/${taskId}`),

    createTask: (projectId, data) => apiRequest.post(`/projects/${projectId}/tasks`, data),

    updateTask: (projectId, taskId, data) => apiRequest.put(`/projects/${projectId}/tasks/${taskId}`, data),

    deleteTask: (projectId, taskId) => apiRequest.delete(`/projects/${projectId}/tasks/${taskId}`)
};
