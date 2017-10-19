import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SignUpForm from './SignUpForm'
import styled from 'styled-components'

const LogInStyles = styled.div`
text-align:center;
background-color: red;
`


class LogInPage extends Component {

  render () {
    return (
      <LogInStyles>
        <h1>Log-In</h1>
        <h3>Already have an account <Link to={`/user`}>Click here</Link></h3>
        <SignUpForm />
      </LogInStyles>
    )
  }
}

export default LogInPage