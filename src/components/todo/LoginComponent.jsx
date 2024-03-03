import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext.js';

export default function LoginComponent() {

    const [username, setUsername] = useState('test');

    const [password, setPassword] = useState();

    const [showErrorMessage, setshowErrorMessage] = useState(false);

    const navigate = useNavigate();

    const authContext = useAuth();

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit() {
        if (authContext.login(username,password)) {
            navigate(`/welcome/${username}`)
        } else {
            setshowErrorMessage(true);
        }
    } 

    return (
        <div className="Login">
            <h1>Time to login!</h1>
            {showErrorMessage && <div className='errorMessage'>Authenticated Failed. Please check your credentials.</div>}

            <div className="LoginForm">
                <label>User Name:</label>
                <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
            </div>
            <div className="Password">
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
            </div>
            <div>
                <button type="button" name="login" onClick={handleSubmit}>
                    login
                </button>
            </div>
        </div>
    )
}