import React, { useEffect, useState } from 'react';
import AvatarComponent from './avatar.component';

const AvatarListComponent = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data)
            })
    }, []);

    return (
        <div>
            <h1>Welcome To Avtar World</h1>
            {
                users.map(user => <AvatarComponent key={user.id} user={user}/>)
            }
            <button>Subscribe</button>
        </div>
    )
}
export default AvatarListComponent;