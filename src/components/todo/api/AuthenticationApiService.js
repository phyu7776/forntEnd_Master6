import { apiClient } from "./ApiClient";

export const excuteBasicAuthenticationService = (token) => apiClient.get(`/basicauth`,{
    headers:{
        Authorization: token
    }
});

export const excuteJWTAuthenticationService = (username, password) => 
    apiClient.post(`/authenticate`,{username, password}
);