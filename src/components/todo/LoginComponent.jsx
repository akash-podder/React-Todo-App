import {useState} from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuth } from './security/AuthContext';


export default function LoginComponent(){
    // navigate between URLs
    const navigate = useNavigate()

    // to Handle Authentication Stuffs
    const authContext = useAuth()

    // Username: `Controller Component` --> "React State" & "onChange" Handler
    const [username, setUsername] = useState('in28minutes')

    function handleUsernameChange(event){
        console.log(event);
        setUsername(event.target.value);
    }


    // Password: `Controller Component` --> "React State" & "onChange" Handler
    const [password, setPassword] = useState('')

    function handlePasswordChange(event){
        console.log(event);
        setPassword(event.target.value);
    }

    // Success Message & Error Message "react state"
    const [showSuccessMesasge, setShowSuccessMesasge] = useState(false)
    const [showErrorMesasge, setShowErrorMesasge] = useState(false)

    // Submit Button Mechanism
    function handleSubmit(){
        if(username==='in28minutes' && password==='dummy'){ 
            authContext.setAuthenticated(true)

            console.log('Success')
            
            setShowSuccessMesasge(true)
            setShowErrorMesasge(false)
            navigate(`/welcome/${username}`)
        }
        else{
            authContext.setAuthenticated(false)

            console.log('Failed')

            setShowSuccessMesasge(false)
            setShowErrorMesasge(true)
        }
    }

    // inner-Component for "Success"
    function SuccessMessageComponent(){
        if(showSuccessMesasge){
            return (
                <div className="successMessage">Authenticated Successfully</div>
            )
        }
        
        return null
    }
    
    // inner-Component for "Success"
    function ErrorMessageComponent(){
        if(showErrorMesasge){
            return (
                <div className="errorMessage">Authenticated Failed. Please check your credentials.</div>
            )
        }
        
        return null
    }

    return (
      <div className="Login">
        <h1>Login</h1>

        {/* <SuccessMessageComponent/>
        <ErrorMessageComponent/> */}

        {showSuccessMesasge && <div className="successMessage">Authenticated Successfully</div>}
        
        {showErrorMesasge && <div className="errorMessage">Authenticated Failed. Please check your credentials.</div>}


        <div className="LoginForm"></div>
            <div>
                <label>User Name:</label>
                {/* this is 1st Controller Field... for this we need two things, `1 React State` & `onChange` for a Function to change the React State */}
                <input type="text" name="username" value={username} onChange={handleUsernameChange}/> 
            </div>

            <div>
                <label>Password:</label>
                {/* this is 2nd Controller Field... for this we need two things, `1 React State` & `onChange` for a Function to change the React State */}
                <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
            </div>

            <div>
                <button type="button" name="login" onClick={handleSubmit}>Login</button>
            </div>
      </div>
    )
}