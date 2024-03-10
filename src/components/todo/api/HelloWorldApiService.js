
import axios from 'axios';

// export function retrieveHelloWorldBean() {
//     return axios.get('http://localhost:8081/hello-world-bean');
// }


const apiClient = axios.create(
    {
        baseURL : 'http://localhost:8081'
    }
)

export const retrieveHelloWorld = () => apiClient.get('/hello-world');

export const retrieveHelloWorldBean = () => apiClient.get('/hello-world-bean');

export const retrieveHelloWorldPhy = (username) => apiClient.get(`/hello-world/path-variable/${username}`);