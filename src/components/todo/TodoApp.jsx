import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}></Route>
                    <Route path='/login' element={<LoginComponent/>}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>}></Route>
                    <Route path='*' element={<ErrorComponent/>}></Route>   
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

function WelcomeComponent() {

    const {username} = useParams();

    console.log(username);

    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Welcome Compoenent
            </div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>We are working really hard!</h1>
            <div>
                Aplogies for the 404. Reach out to our team at 010-1234-1234.
            </div>
        </div>
    )
}