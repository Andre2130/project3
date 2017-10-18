import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import UsersList from './UserList'


class UserPage extends Component {
  state={
    user: {
      userName: '',
      password: '', 
      users:[]
    }
  }

  async componentWillMount () {
    const { userId } = this.props.match.params
    const res = await axios.get(`/api/user/${userId}`)
    this.setState({user: res.data})
    console.log(res.data)
  }

  deleteUser = async (userId) => {
    // const { userId } = this.props.match.params
    // const id = userId
    const res = await axios.delete(`/api/users/${userId}`)
    this.setState({user: res.data})
  }

  render () {
    return (
      <div>
        <h1>USER PAGE {this.state.user.userName}</h1>
        <h3>Please Select an Existing User</h3>
        {this.props.users.map(user => {
          return (<Link to={`/user/${user._id}`}>{user.userName}</Link>)
        })}
        <UsersList users={this.props.users}
        deleteUser={this.deleteUser}
      />
      </div>
    )
  }
}

export default UserPage