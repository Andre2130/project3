import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SignUpForm from './SignUpForm'


class UserPage extends Component {

  render () {
    return (
      <div>
        <h1>USER PAGE</h1>
        <h3>Please Select an Existing User</h3>
        {this.props.users.map(user => {
          return (<Link to={`/user/${user._id}`}>{user.userName}</Link>)
        })}
        <SignUpForm />
      </div>
    )
  }
}

export default UserPage