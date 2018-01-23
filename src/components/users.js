import React, { Component } from 'react';
import { db } from '../firebase';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { users: null };
    }

    // componentDidMount() {
    //     db.onceGetUsers()
    //         .then(snapshot => this.setState({users: snapshot.val}, () => {
    //             console.log(this.state.users);
    //         })
    //         );
    // }

    render() {
        return(
            <div>
                <h2>
                    Users
                </h2>
                {/* {Object.keys(this.state.users).map(key => 
                    <div key={key}>{this.state.users[key].username}</div>
                )} */}
            </div>
        );
    }
}
export default Users;