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
export const doApiCallHelloWorldBean = () => apiClient.get('/hello-world-bean')

export const doApiCallHelloWorldPathVariable = (username) => apiClient.get(`/hello-world/path-variable/${username}`)
