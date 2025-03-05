import { createContext, useContext, useState } from "react";
import { Navigate, useLocation } from 'react-router-dom';

import { apiClient } from "../api/ApiClient"

import { executeBasicAuthenticationService } from '../api/AuthenticationApiService'

// 1. Create a Context & "export" it to the other Components
const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

// 2. Share the Created Context with other Components
export default function AuthProvider({children}){

    // 3. Put some "State" in the Context
    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)
    const [token, setToken] = useState(null)
    
    // making "async" because, we want to "await" the API call is Finished to do task according to it
    async function verifyLogin(username, password){

        const basicAuthToken = 'Basic ' + window.btoa(username + ":" + password)
        
        try{
            const response = await executeBasicAuthenticationService(basicAuthToken)
            
            if(response.status==200){ 
                setAuthenticated(true)
                setUsername(username)
                setToken(basicAuthToken)
                
                // setting "basicAuthToken" to GLOBAL "apiClient"
                apiClient.interceptors.request.use(
                    (config) => {
                        console.log('intercepting and adding a token')
                        config.headers.Authorization=basicAuthToken
                        return config
                    }
                )

                return true
            }
            else{
                doLogout()
                return false
            }
        }
        catch(error){
            doLogout()
            return false
        }
    }

    function doLogout(){
        setAuthenticated(false)
        setUsername(null)
        setToken(null)
    }

    const valueToBeShared = {isAuthenticated, username, token, verifyLogin, doLogout} // this is Creating an "Object" in JavaScript... there is Nothing called "new" Keyword to Create an "Object"

    return (
        <AuthContext.Provider value={valueToBeShared}>
            {children}
        </AuthContext.Provider>
    )
}


// this Route will WRAP All the Components that should be Routed to "/login" page if Not Logged In
export function AuthenticatedRoute({children}){
    
    const authContext = useAuth()
    const location = useLocation(); // Get the current "URL-route"

    // If user is authenticated and trying to access "/login", redirect to "/" URL
    if (authContext.isAuthenticated && location.pathname === "/login") {
        return <Navigate to="/" />;
    }
    else if(authContext.isAuthenticated){
        return children
    }
    else{
        return <Navigate to="/login" />
    }
}