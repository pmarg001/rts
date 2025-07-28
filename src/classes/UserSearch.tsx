import { Component } from 'react';

interface User {
    name: string;
    age: number;
}

interface UserSearchProps {
    users: User[];
}

interface UserSearchState {
    name: string;
    user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
    state: UserSearchState = {
        name: '',
        user: undefined
    }

    onClick = () => {
        const foundUser  = this.props.users.find(user => {
            return user.name === this.state.name;
        });

        this.setState({ user: foundUser });
    }

    render() {
        const { name, user } = this.state;

        return (
            <div>
                <h2>Find user</h2>
                <input value={name} onChange={(event) => {this.setState({ name: event.target.value })}} />
                <br />
                <button onClick={this.onClick}>Find</button>

                <h3>User Details:</h3>
                Name: {user?.name}
                <br/>
                Age: {user?.age}
            </div>
        );
    }
}

export default UserSearch;
