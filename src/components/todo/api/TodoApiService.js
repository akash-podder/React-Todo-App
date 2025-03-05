import axios from 'axios';

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);

export const retrieveAllTodosForUsernameApiCall = (username) => apiClient.get(`/users/${username}/todos`)

export const retrieveTodoApiCall = (username, id) => apiClient.get(`/users/${username}/todos/${id}`)

export const deleteTodoApiCall = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`)

export const updateTodoApiCall = (username, id) => apiClient.put(`/users/${username}/todos/${id}`)