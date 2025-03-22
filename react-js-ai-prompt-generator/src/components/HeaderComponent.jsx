import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function HeaderComponent(){
    return (
        <header>
            
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><Link to="/" className="navbar-brand">Chatgpt Prompt Generator</Link></div>

                <ul className="navbar-nav">
                    <li>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    
                    <li>
                        <Link className="nav-link" to="/get-prompt">Get Prompts</Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}