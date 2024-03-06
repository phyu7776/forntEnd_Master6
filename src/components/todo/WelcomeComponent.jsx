import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function WelcomeComponent() {

    const {username} = useParams();

    function callHelloWorldRestAPI() {
        console.log('called')

        axios.get('http://localhost:8081/hello-world')
            .then((responese) => sccessfulResponse(responese))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup'));
    }

    function sccessfulResponse(responese) {
        console.log(responese)
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
            <button className='btn btn-success m-5' onClick={callHelloWorldRestAPI}>Call Hello World REST API</button>
        </div>
    )
}