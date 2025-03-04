import { useParams, Link } from 'react-router-dom';

import axios from 'axios';

export default function WelcomeComponent(){
    // this is to get "username" from "URL" parameter
    const params = useParams() // 1st Way
    const {username} = useParams() // 2nd Way

    console.log(params)

    function callHelloWorldRestApi(){
      axios.get('http://localhost:8080/hello-world')
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
        .finally(() => console.log('Clean Up'))
    }

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

        <button className="btn-btn-success m-5" onClick={callHelloWorldRestApi}>Call Rest Api</button>
        
      </div>
      
    )
}