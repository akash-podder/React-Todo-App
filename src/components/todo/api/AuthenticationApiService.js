import { apiClient } from "./ApiClient"

// only "/basicauth" Route needs "Authorization Token" to Set the Value in Global "apiClient" Caller... All the Other Api Calling Method's TOKEN will be automatically saved from "security/AuthContext.js" File
export const executeBasicAuthenticationService = 
    (token) => apiClient.get(`/basicauth`, {
        headers: {
            Authorization: token
        }
})