import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link } from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <HeaderComponent/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}/>
                    <Route path='/login' element={<LoginComponent/>}/>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>}/>
                    <Route path='/todos' element={<ListTodosComponent/>}/>
                    <Route path='/logout' element={<LogoutComponent/>}/>
                    
                    <Route path='*' element={<ErrorComponent/>}/> 
                </Routes>
            </BrowserRouter>
            <FooterComponent/>
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
                Manage Your todos. <Link to ='/todos'>Go here</Link>
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

function ListTodosComponent() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay());

    const todos =[
        {id: 1, description: 'Lean AWS',            done: false, targetDate: targetDate},
        {id: 2, description: 'Lean Full Stack Dev', done: false, targetDate: targetDate},
        {id: 3, description: 'Lean DevOps',         done: false, targetDate: targetDate}
    ];

    return (
        <div className="ListTodosComponent">
            <h1>Things You Want To Do!</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                            <td>done</td>
                            <td>targetDate</td>
                        </tr>
                    </thead>
                    <tbody>
                    {todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function HeaderComponent() {
    return (
        <div className="header">
            Header <hr/>
        </div>
    )
}

function FooterComponent() {
    return (
        <div className="footer">
            <hr/> Footer
        </div>
    )
}

function LogoutComponent() {
    return (
        <div className="LogoutComponent">
            <h1>You are logged out!</h1>
            <div>
                Thank you for using our App. Come back soon!
            </div>
        </div>
    )
}

