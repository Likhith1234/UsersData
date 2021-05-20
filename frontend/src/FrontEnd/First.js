import React, { Component } from 'react'

export default class First extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            users:[]
        }
    }

    componentDidMount = () => {
        fetch("http://localhost:8000/demo")
        .then((response => response.json()))
        .then((data) => {
            this.setState({users:data.users});
            console.log(this.state);
        })
        .catch((err) => {
            console.log(err);
        })
    }


    
    render() {
        return (
            <div>
                <h1>Users</h1>
                <div>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user,index) => {
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.number}</td>
                                    <td>{user.age}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}
