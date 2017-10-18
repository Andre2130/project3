import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SignUpForm from './SignUpForm'


class LogInPage extends Component {

  render () {
    return (
      <div>
        <h1>Log-In</h1>
        <h3>Already have an account <Link to={`/user`}>Click here</Link></h3>
        <SignUpForm />
      </div>
    )
  }
}

export default LogInPage