import axios from 'axios';

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);

// 1st-Way
// export function doApiCallHelloWorldBean(){
//     return apiClient.get('/hello-world-bean')
// }

// 2nd-Way
export const doApiCallHelloWorldBean = 
    (token) => apiClient.get('/hello-world-bean', {
        headers: {
            Authorization: token
        }
})

export const executeBasicAuthenticationService = 
    (token) => apiClient.get(`/basicauth`, {
        headers: {
            Authorization: token
        }
})

export const doApiCallHelloWorldPathVariable = 
    (username, token) => apiClient.get(`/hello-world/path-variable/${username}`, {
            headers: {
                Authorization: token
            }
})