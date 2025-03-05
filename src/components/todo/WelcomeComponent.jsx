import { useParams, Link } from 'react-router-dom';

import { useState } from 'react';

import { doApiCallHelloWorldBean, doApiCallHelloWorldPathVariable } from './api/HelloWorldApiService';

export default function WelcomeComponent(){
    // this is to get "username" from "URL" parameter
    const params = useParams() // 1st Way
    const {username} = useParams() // 2nd Way

    const [message, setMessage] = useState(null)

    console.log(params)

    function callHelloWorldRestApi(){
      
        // doApiCallHelloWorldBean()
        //   .then((response) => successfulResponse(response))
        //   .catch((error) => errorResponse(error))
        //   .finally(() => console.log('Clean Up'))

        doApiCallHelloWorldPathVariable('Ramos')
          .then((response) => successfulResponse(response))
          .catch((error) => errorResponse(error))
          .finally(() => console.log('Clean Up'))
    }

    function successfulResponse(response){
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(response){
        console.log(response)
        setMessage(response.data.message)
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

        <div>
          <button className="btn-btn-success m-5" onClick={callHelloWorldRestApi}>Call Rest Api</button>
        </div>

        <div className="text-info">{message}</div>

      </div>
      
    )
}