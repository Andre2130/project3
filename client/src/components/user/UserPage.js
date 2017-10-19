import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import UsersList from './UserList'



class UserPage extends Component {
  state = {
    users:[]
  }
  deleteUser = async (userId) => {
    //const { userId } = this.props.match.params
    //const id = userId
    const res = await axios.delete(`/api/users/${userId}`)
    this.setState({user: res.data})
  }
  updatedUser = async (userId, updatedUser) => {
    //const { userId } = this.props.match.params
    //const id = userId
    const res = await axios.patch(`/api/users/${userId}`, {user: updatedUser})
    this.setState({user: res.data})
  }

  getAllUsers = async () => {
    console.log('getting users')
    try {
      const res = await axios.get('/api/users')
      console.log(res)
      this.setState({users: res.data})
    } catch (err) {
      console.log(err)
    }
  }
  componentWillMount() {
    this.getAllUsers()
  }

  render () {
    return (
      <div>
        <h1>USER PAGE {this.props.userName}</h1>
        <h3>Please Select an Existing User</h3>
        {this.props.users.map(user => {
          return (<Link to={`/user/${user._id}`}>{user.userName} | </Link>)
        })}
        <UsersList users={this.props.users}
        deleteUser={this.deleteUser} updatedUser={this.updatedUser}
      />
      </div>
    )
  }
}

export default UserPage