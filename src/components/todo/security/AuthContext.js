import { createContext, useContext, useState } from "react";
import { excuteBasicAuthenticationServic, excuteJWTAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({children}) {

    const [isAuthenticated, setAuthenticated] = useState(false);

    const [username, setUsername] = useState(null);

    const [token, setToken] = useState(null);

    // function login(username, password) {
    //     if (username === 'test' && password === 'dummy') {
    //         console.log('Success');
    //         setAuthenticated(true);
    //         setUsername(username);
    //         return true;
            
    //     } else {
    //         console.log('Failed');
    //         setAuthenticated(false);
    //         setUsername(null);
    //         return false;
    //     }
    // }

    // async function login(username, password) {

    //     const basicToken = 'Basic ' + window.btoa(username + ":" + password)

    //     try {

    //         const response = await excuteBasicAuthenticationService(basicToken)
    
    //         if (response.status == 200) {
    //             setAuthenticated(true);
    //             setUsername(username);
    //             setToken(basicToken);
                
    //             apiClient.interceptors.request.use(
    //                 (config) => {
    //                     console.log('intercepting and adding a token')
    //                     config.headers.Authorization=basicToken
    //                     return config
    //                 }
    //             )
                
    //             return true;
                
    //         } else {
    //             logout()
    //             return false;
    //         }
    //     } catch (error) {
    //         logout()
    //         return false;
    //     }
    // }

    async function login(username, password) {
        try {

            const response = await excuteJWTAuthenticationService(username, password)
    
            if (response.status == 200) {
                const jwtToken = response.data.token
                setAuthenticated(true);
                setUsername(username);
                setToken("Bearer " + jwtToken);
                
                apiClient.interceptors.request.use(
                    (config) => {
                        console.log('intercepting and adding a token')
                        config.headers.Authorization=jwtToken
                        return config
                    }
                )
                
                return true;
                
            } else {
                logout()
                return false;
            }
        } catch (error) {
            logout()
            return false;
        }
    }

    function logout() {
        setUsername(null);
        setAuthenticated(false);
        setToken(null);
    }

    return (
        <AuthContext.Provider value = {{isAuthenticated, setAuthenticated, login, logout, username}}>
            {children}
        </AuthContext.Provider>
    )
}