import React, { useEffect, useState } from 'react';
import ToDoComponent from './todo.component';
const ToDoListComponent = () => {
    const [tododata, setTodo] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(data => {
                setTodo(data)
            })
    }, []);
    return (
        <div>
            <h1> Welcome to ToDo List</h1>
            {
                tododata.map(todo => <ToDoComponent key={todo.id} todo={todo} />)
            }
        </div>
    )
}

export default ToDoListComponent;