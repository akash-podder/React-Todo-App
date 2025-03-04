import {useState} from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link } from 'react-router-dom';
import {PropTypes} from 'prop-types';
import './TodoApp.css'

export default function TodoApp(){
    return (
      <div className="TodoApp">
        <HeaderComponent/>

        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <LoginComponent/> }></Route>
                
                <Route path='/login' element={ <LoginComponent/> }></Route>
                
                <Route path='/welcome/:username' element={ <WelcomeComponent/> }></Route>

                <Route path='/todos' element={ <ListTodosComponent/> }></Route>

                <Route path='/logout' element={ <LogoutComponent/> }></Route>

                {/* if None of the Routes Match, we Route to this GENERIC Error Component */}
                <Route path='*' element={ <ErrorComponent/> }></Route>

            </Routes>
            
        </BrowserRouter>

        <FooterComponent/>
      </div>
    )
}

function LoginComponent(){
    // navigate between URLs
    const navigate = useNavigate();

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
            console.log('Success')
            setShowSuccessMesasge(true)
            setShowErrorMesasge(false)
            navigate(`/welcome/${username}`)
        }
        else{
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

function WelcomeComponent(){
    // this is to get "username" from "URL" parameter
    const params = useParams() // 1st Way
    const {username} = useParams() // 2nd Way

    console.log(params)

    return (
      <div className="Welcome">
        <h1>Welcome to Real Madrid React Website</h1>
        <div>
            Welcome User: {username}
        </div>

        <div>
            {/* "Link" will cause NO Network call & Entire Page won't be Refresh. */}
            Manage your todos - <Link to='/todos'>Go Here</Link>
        </div>
      </div>
      
    )
}


function ListTodosComponent(){
    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const todosList = [
                    {id: 1, description: 'Learn AWS', isDone: false, targetDate: targetDate},
                    {id: 2, description: 'Learn Full Stack Dev', isDone: false, targetDate: targetDate},
                    {id: 3, description: 'Learn DevOps', isDone: false, targetDate: targetDate},
                ]

    return (
      <div className="container">
        <h1>Things You Want to Do!</h1>
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Description</td>
                        <td>is Done?</td>
                        <td>Target Date</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        todosList.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.isDone.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
      </div>
    )
}

function HeaderComponent(){
    return (
      <div className="header">
        Header <hr/>
      </div>
    )
}

function FooterComponent(){
    return (
      <div className="footer">
        <hr/> Footer
      </div>
    )
}

function LogoutComponent(){
    return (
      <div className="LogoutComponent">
        <h1>You are Logged Out!!!</h1>
        <div>
            Thanks for Visiting Real Madrid.
        </div>
      </div>
    )
}

function ErrorComponent(){
    return (
      <div className="ErrorComponent">
        <h1>Error Component</h1>
        <div>
            Apologies for the Delay
        </div>
      </div>
    )
}