import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class LogInPage extends Component {
  state = {
    users: []
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
  componentWillMount () {
    this.getAllUsers()
}
  
  render () {
    return (
      <div>
        <h1>Log-In</h1>
        <h3>Please Select an Existing User</h3>
        {this.state.users.map(user => {
          return (<Link to={`/user/${user._id}`}>{user.userName}</Link>)
        })}
      </div>
    )
  }
}

export default LogInPage