import React, { useEffect, useState } from 'react';
import ToDoComponent from './todo.component';
import LoaderComponent from '../Partials/loader.component';

const ToDoListComponent = () => {
    const [todos, setTodo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(data => {
                setTodo(data);
                setIsLoading(false);
            })
    }, []);
    return (
        <div>
            <h1> Welcome to ToDo List</h1>
            {
                isLoading 
                ? <LoaderComponent />
                : todos.map(todo => <ToDoComponent key={todo.id} todo={todo} />)
            }
        </div>
    )
}

export default ToDoListComponent;