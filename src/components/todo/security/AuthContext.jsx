import { createContext, useContext, useState } from "react";

import { executeBasicAuthenticationService } from '../api/HelloWorldApiService'

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