import { createContext, useContext, useState } from "react";

// 1. Create a Context & "export" it to the other Components
const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

// 2. Share the Created Context with other Components
export default function AuthProvider({children}){

    // 3. Put some "State" in the Context
    const [isAuthenticated, setAuthenticated] = useState(false)

    const valueToBeShared = {isAuthenticated, setAuthenticated} // this is Creating an "Object" in JavaScript... there is Nothing called "new" Keyword to Create an "Object"

    return (
        <AuthContext.Provider value={valueToBeShared}>
            {children}
        </AuthContext.Provider>
    )
}