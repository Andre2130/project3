import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

class EditForm extends Component {
  state = {
    newUser: {
      userName: '',
      password: ''
    },
    redirectToUser: false,
    newUserId: ''
  }

  // handleChange is called every time a user makes an input event.
  handleChange = (event) => {
    // This is equal to the name attribute of the input field
    const attribute = event.target.name
    // Deeply clone this.state.newUser
    const updateUser = {...this.state.newUser}

    // Use bracket syntax to dynamically update the object
    // event.target.value is always equal to what the user is typing
    updateUser[attribute] = event.target.value
    this.setState({newUser: updateUser})
  }

  handleSubmit = async (event) => {
    // event.preventDefault causes the form not to reload the page
    event.preventDefault()
    // Post to our API and create a new user.
    // The second argument here is the payload that 
    // is consumed on the server side as req.body
    const res = await axios.patch('/api/users', {
      'user': this.state.newUser
    })
    console.log(res.data)
    // After the post is complete, set the state to trigger the redirect
    // and add the newly created user's id to state so we can change the route
    this.setState({redirectToUser: true, newUserId: res.data._id})
  }
//   updateUser = async (userId) => {
//     const { userId } = this.props.match.params
//     const id = userId

//     const clonedUser = {...this.state.user}
//     const user = clonedUser.users.find(i => i._id === userId)

//     const res = await axios.patch(`/api/users/${userId}/users/${id}`, {
//       user: user
//     })
//     this.setState({user: res.data})
//   }

  render () {
    // If statement which is triggered after a new user posts is successful 
    if (this.state.redirectToUser) {
      return <Redirect to={`/`} />
    }

    return (
      <div>
        <h1>Edit</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input
              onChange={this.handleChange} name="userName"
              type="text" value={this.props.userName}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}


export default EditForm