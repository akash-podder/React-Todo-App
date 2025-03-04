import { BrowserRouter, Routes, Route, useNavigate, useParams, Link } from 'react-router-dom';

import {PropTypes} from 'prop-types';
import './TodoApp.css'

import WelcomeComponent from './WelcomeComponent';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import ListTodosComponent from './ListTodosComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ErrorComponent from './ErrorComponent';

export default function TodoApp(){
    return (
      <div className="TodoApp">

        <BrowserRouter>
            {/* we have to put `HeaderComponent` in `BrowserRouter` otherwise we won't be able to Access `Link` in FooterComponent */}
            <HeaderComponent/>

            <Routes>
                <Route path='/' element={ <LoginComponent/> }></Route>
                
                <Route path='/login' element={ <LoginComponent/> }></Route>
                
                <Route path='/welcome/:username' element={ <WelcomeComponent/> }></Route>

                <Route path='/todos' element={ <ListTodosComponent/> }></Route>

                <Route path='/logout' element={ <LogoutComponent/> }></Route>

                {/* if None of the Routes Match, we Route to this GENERIC Error Component */}
                <Route path='*' element={ <ErrorComponent/> }></Route>

            </Routes>
            
            {/* we have to put `FooterComponent` in `BrowserRouter` otherwise we won't be able to Access `Link` in FooterComponent */}
            <FooterComponent/>

        </BrowserRouter>
      </div>
    )
}