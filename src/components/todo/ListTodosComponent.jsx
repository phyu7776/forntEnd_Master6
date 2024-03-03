
export default function ListTodosComponent() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay());

    const todos =[
        {id: 1, description: 'Lean AWS',            done: false, targetDate: targetDate},
        {id: 2, description: 'Lean Full Stack Dev', done: false, targetDate: targetDate},
        {id: 3, description: 'Lean DevOps',         done: false, targetDate: targetDate}
    ];

    return (
        <div className="conatiner">
            <h1>Things You Want To Do!</h1>
            <div>
                <table className='table'>
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