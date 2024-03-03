import { useState } from 'react'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <LoginComponent/>
        </div>
    )
}

function LoginComponent() {

    const [username, setUsername] = useState('test')

    const [password, setPassword] = useState()

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }


    return (
        <div className="Login">
            <div className="LoginForm">
                <label>User Name:</label>
                <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
            </div>
            <div className="Password">
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
            </div>
            <div>
                <button type="button" name="login">
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