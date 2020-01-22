import React from 'react';
import { Link } from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/todo">To Do</Link>
        </div>
    )
}

export default MenuComponent;