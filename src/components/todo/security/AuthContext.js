import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({children}) {

    const [isAuthenticated, setAuthenticated] = useState(false);

    const [authName, setAuthName] = useState();

    function login(username, password) {
        if ((username === 'test' || username === 'test2') && password === 'dummy') {
            console.log('Success');
            setAuthenticated(true);
            setAuthName(username);
            return true;
            
        } else {
            console.log('Failed');
            setAuthenticated(false);
            return false;
        }
    }

    function logout() {
        setAuthName(null);
        setAuthenticated(false);
    }

    return (
        <AuthContext.Provider value = {{isAuthenticated, setAuthenticated, login, logout, authName}}>
            {children}
        </AuthContext.Provider>
    )
}