import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginComponent() {

    const [username, setUsername] = useState('test');

    const [password, setPassword] = useState();

    const [showSuccessMessage, setshowSuccessMessage] = useState(false);

    const [showErrorMessage, setshowErrorMessage] = useState(false);

    const navigate = useNavigate();

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit() {
        if (username === 'test' && password === 'dummy') {
            console.log('Success');
            setshowSuccessMessage(true);
            setshowErrorMessage(false);
            navigate(`/welcome/${username}`);
        } else {
            console.log('Failed');
            setshowErrorMessage(true);
            setshowSuccessMessage(false) ;
        }
    } 

    return (
        <div className="Login">
            <h1>Time to login!</h1>
            {showSuccessMessage && <div className='successMessage'>Authenticated Successfully</div>}
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