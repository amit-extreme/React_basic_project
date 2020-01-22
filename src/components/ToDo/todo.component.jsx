import React from 'react';

const ToDoComponent = (props) => {
    return (
        <div>
            <ul>
                <li>{props.todo.id}</li>
                <li>{props.todo.status}</li>
                <li>{props.todo.title}</li>
            </ul>
        </div>
    )
}

export default ToDoComponent;