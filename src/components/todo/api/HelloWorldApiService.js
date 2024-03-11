
import { apiClient } from './ApiClient';

export const retrieveHelloWorld = () => apiClient.get('/hello-world');

export const retrieveHelloWorldBean = () => apiClient.get('/hello-world-bean');

export const retrieveHelloWorldPhy = (username) => apiClient.get(`/hello-world/path-variable/${username}`);

export const excuteBaicAuthenticationService = (token) => apiClient.get(`/basicauth`,{
    headers:{
        Authorization: token
    }
});