import { useState } from 'react';

interface User {
    name: string;
    age: number;
}

const users = [
    {
        name: 'Sarah',
        age: 20 
    }, 
    {
        name: 'Jon',
        age: 20
    },
    {
        name: 'Micheal',
        age: 24
    }
]

const UsersList: React.FC = () => {
    const [ user, setUser ] = useState<User | undefined>(); // to store the find result
    const [ name, setName ] = useState(''); // to store the name entered in the input

    const onClick = () => {
        const userFound = users.find((usr) => {
            return usr.name === name;
        });

        setUser(userFound);
    }

    return (
        <div>
            <h2>Find user</h2>
            <input onChange={(event) => {setName(event.target.value)}} />
            <br />
            <button onClick={onClick}>Find</button>

            <h3>User Details:</h3>
            Name: {user?.name}
            <br/>
            Age: {user?.age}
        </div>
    )
};

export default UsersList;
