import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}></Route>
                    <Route path='/login' element={<LoginComponent/>}></Route>
                    <Route path='/welcome' element={<WelcomeComponent/>}></Route>
                </Routes>
            </BrowserRouter>            
        </div>
    )
}

function LoginComponent() {

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
            navigate('/welcome');
        } else {
            console.log('Failed');
            setshowErrorMessage(true);
            setshowSuccessMessage(false) ;
        }
    } 

    return (
        <div className="Login">
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

function WelcomeComponent() {
    return (
        <div className="Welcome">
            Welcome Compoenent
        </div>
    )
}