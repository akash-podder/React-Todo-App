import { apiClient } from "./ApiClient"

export const retrieveAllTodosForUsernameApiCall = (username) => apiClient.get(`/users/${username}/todos`)

export const retrieveTodoApiCall = (username, id) => apiClient.get(`/users/${username}/todos/${id}`)

export const deleteTodoApiCall = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`)

export const updateTodoApiCall = (username, id, todo) => apiClient.put(`/users/${username}/todos/${id}`, todo)

export const createTodoApiCall = (username, todo) => apiClient.post(`/users/${username}/todos`, todo)