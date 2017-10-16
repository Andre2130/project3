import React, { Component, Redirect } from 'react'
import axios from 'axios'

class SignUpForm extends Component {

    state = {
        newUser: {
          userName: '',
          password: ''
        },
        redirectToCollections: false,
        newUserId: ''
      }

createUser = () => {
    axios.post('/api/users', {
      user: this.state.user
    }).then((res) => {
      this.setState({redirectToHome: true, createdUser: res.data})
    })
  }

  handleChange = (e) => {
      console.log(e.target.name)
      const attribute = e.target.name
    const updateUser = {...this.state.newUser}
    updateUser[attribute] = e.target.value
    this.setState({newUser: updateUser})
  }

  handleSignUp = (e) => {
    e.preventDefault()
    this.createUser()
  }

  handleSubmit = async (e) => {
      e.preventDefault()
      const res = await axios.post('/api/users', {
          'user': this.state.newUser
      })
  }

render () {
    if(this.state.redirectToCollections){
        return <Redirect to={`/collections/${this.state.newUserId}`} />
}
return (
    <div>
      <h1>Sign-Up</h1>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="userName">User Name</label>
          <input
            onChange={this.handleChange} name="userName"
            type="text" value={this.state.newUser.userName}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input onChange={this.handleChange}
            value={this.state.newUser.password}
            name="password" type="text" />
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  )
}
}

export default SignUpForm