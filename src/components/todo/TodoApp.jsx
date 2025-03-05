import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './css/TodoApp.css'

import {PropTypes} from 'prop-types';

import WelcomeComponent from './WelcomeComponent';
import HomeComponent from './HomeComponent';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import ListTodosComponent from './ListTodosComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ErrorComponent from './ErrorComponent';
import TodoComponent from './TodoDetailsComponent';

import AuthProvider, { AuthenticatedRoute } from './security/AuthContext';

export default function TodoApp(){
    return (
      <div className="TodoApp">
        {/* Everything will be wrapped by `AuthProvider` */}
        <AuthProvider>

            <BrowserRouter>
                {/* we have to put `HeaderComponent` in `BrowserRouter` otherwise we won't be able to Access `Link` in FooterComponent */}
                <HeaderComponent/>

                <Routes>
                    <Route path='/' element={ <HomeComponent/> }></Route>
                    
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

                    <Route path='/todo/:id' element={ 
                        <AuthenticatedRoute>
                            <TodoComponent/>
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