import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { useAuth } from './security/AuthContext';

export default function HeaderComponent(){

    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated

    function logoutClick(){
        authContext.doLogout()
    }

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><Link to="/" className="navbar-brand">Real Madrid</Link></div>

                <ul className="navbar-nav">
                    <li>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    
                    <li>
                        { isAuthenticated &&
                            <Link className="nav-link" to="/todos">Todos</Link>
                        }
                    </li>
                </ul>
                
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    <li>
                        { !isAuthenticated &&
                            <Link className="nav-link" to="/login">Login</Link>
                        }
                    </li>
                    
                    <li>
                        { isAuthenticated &&
                            <Link className="nav-link" to="/logout" onClick={logoutClick}>Logout</Link>
                        }
                    </li>
                </ul>
            </nav>
        </header>
    )
}