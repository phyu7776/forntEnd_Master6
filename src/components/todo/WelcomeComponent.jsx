import { useParams, Link } from 'react-router-dom';

import { useState } from 'react';
import { retrieveHelloWorld, retrieveHelloWorldBean, retrieveHelloWorldPhy } from './api/HelloWorldApiService.js';

export default function WelcomeComponent() {

    const {username} = useParams();
    
    const [message, setMessage] = useState(null);

    function callHelloWorldAPI() {
        retrieveHelloWorld()
            .then((responese) => sccessfulResponse(responese))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup'));
    }

    function callHelloWorlBeanAPI() {
        retrieveHelloWorldBean()
            .then((responese) => sccessfulResponse(responese))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup'));
    }

    function callHelloWorldPhyAPI() {
        retrieveHelloWorldPhy('phy')
            .then((responese) => sccessfulResponse(responese))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup'));
    }

    function sccessfulResponse(responese) {
        console.log(responese);

        if (typeof(responese.data) == 'string') {
            setMessage(responese.data)
        } else {
            setMessage(responese.data.message);
        }
    }


    function errorResponse(error) {
        console.log(error)
    }

    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Manage Your todos. <Link to ='/todos'>Go here</Link>
            </div>
            <button className='btn btn-success m-5' onClick={callHelloWorldAPI}>Call Hello World</button>
            <button className='btn btn-success m-5' onClick={callHelloWorlBeanAPI}>Call Hello World BEAN</button>
            <button className='btn btn-success m-5' onClick={callHelloWorldPhyAPI}>Call Hello World PHY</button>

            <div className='text-info'>
                {message}
            </div>
        </div>
    )
}