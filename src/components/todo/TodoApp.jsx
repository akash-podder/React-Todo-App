import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import {PropTypes} from 'prop-types';
import './css/TodoApp.css'

import WelcomeComponent from './WelcomeComponent';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import ListTodosComponent from './ListTodosComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ErrorComponent from './ErrorComponent';

import AuthProvider, { useAuth } from './security/AuthContext';


function AuthenticatedRoute({children}){
    const authContext = useAuth()

    if(authContext.isAuthenticated){
        return children
    }
    else{
        return <Navigate to="/" />
    }
}

export default function TodoApp(){
    return (
      <div className="TodoApp">
        {/* Everything will be wrapped by `AuthProvider` */}
        <AuthProvider>

            <BrowserRouter>
                {/* we have to put `HeaderComponent` in `BrowserRouter` otherwise we won't be able to Access `Link` in FooterComponent */}
                <HeaderComponent/>

                <Routes>
                    <Route path='/' element={ <LoginComponent/> }></Route>
                    
                    <Route path='/login' element={ <LoginComponent/> }></Route>
                    
                    <Route path='/welcome/:username' element={ 
                        <AuthenticatedRoute>
                            <WelcomeComponent/>
                        </AuthenticatedRoute>  }>
                    </Route>

                    <Route path='/todos' element={ 
                        <AuthenticatedRoute>
                            <ListTodosComponent/>
                        </AuthenticatedRoute> }>
                    </Route>

                    <Route path='/logout' element={ 
                        <AuthenticatedRoute>
                            <LogoutComponent/>
                        </AuthenticatedRoute> }>
                    </Route>
                    

                    {/* if None of the Routes Match, we Route to this GENERIC Error Component */}
                    <Route path='*' element={ <ErrorComponent/> }></Route>

                </Routes>
                
                {/* we have to put `FooterComponent` in `BrowserRouter` otherwise we won't be able to Access `Link` in FooterComponent */}
                <FooterComponent/>

            </BrowserRouter>
        </AuthProvider>
      </div>
    )
}