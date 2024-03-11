import { useEffect, useState } from "react";
import { retrieveAllTodosForUserApi, deleteTodoApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ListTodosComponent() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay());

    const authConbtext = useAuth();

    const username = authConbtext.username;

    const [todos, setTodos] = useState([]);

    const [message, setMessage] = useState(null);

    const navigate = useNavigate();
    
    useEffect ( () => refreshTodos(), [])

    function refreshTodos() {
        retrieveAllTodosForUserApi(username)
        .then(response => {
                setTodos(response.data)
            }   
        )
        .catch(error => console.log(error));
    }

    function deleteTodo(id) {
        deleteTodoApi(username, id)
        .then((response) => {
            setMessage(`Delete of todo with ${id} successful`)
            refreshTodos();
        })
        .catch((error) => console.log(error));
    }

    function updateTodo(id) {
        navigate(`/todo/${id}`)
    }

    function addNewTodo() {
        navigate(`/todo/-1`)
    }

    return (
        <div className="conatiner">
            <h1>Things You Want To Do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>description</th>
                            <th>done</th>
                            <th>targetDate</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                    {todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                {/* <td>{todo.targetDate.toDateString()}</td> */}
                                <td>{todo.targetDate.toString()}</td>
                                <td><button className="btn btn-warning" 
                                            onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                <td><button className="btn btn-success" 
                                            onClick={() => updateTodo(todo.id)}>Update</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="btn btn-success m-5" onClick={addNewTodo}>Add new Todo</div>
        </div>
    )
}