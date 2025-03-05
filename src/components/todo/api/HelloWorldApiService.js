import { apiClient } from "./ApiClient"

// 1st-Way
// export function doApiCallHelloWorldBean(){
//     return apiClient.get('/hello-world-bean')
// }

// 2nd-Way
export const doApiCallHelloWorldBean = () => apiClient.get('/hello-world-bean')

// only "/basicauth" Route needs "Authorization Token" to Set the Value in Global "apiClient" Caller
export const executeBasicAuthenticationService = 
    (token) => apiClient.get(`/basicauth`, {
        headers: {
            Authorization: token
        }
})

export const doApiCallHelloWorldPathVariable = (username) => apiClient.get(`/hello-world/path-variable/${username}`)