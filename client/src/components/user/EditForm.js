import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

class EditForm extends Component {
  state = {
    newUser: {
      userName: ''
    },
    redirectToUser: false,
    newUserId: ''
  }

  // handleChange is called every time a user makes an input event.
  handleChange = (event) => {
    const attribute = event.target.name
    const updateUser = {...this.state.newUser}
    updateUser[attribute] = event.target.value
    this.setState({newUser: updateUser})
  }

  handleSubmit = async (event) => {
    // event.preventDefault causes the form not to reload the page
    event.preventDefault()
    // Post to our API and create a new user.
    // The second argument here is the payload that 
    // is consumed on the server side as req.body
    console.log(this.props.userId, this.state.newUser)
    this.props.updatedUser(this.props.userId, this.state.newUser)
    // After the post is complete, set the state to trigger the redirect
    // and add the newly created user's id to state so we can change the route
    //this.setState({redirectToUser: true, newUserId: res.data._id})
  }


  render () {
    // If statement which is triggered after a new user posts is successful 
    if (this.state.redirectToUser) {
      return <Redirect to={`/`} />
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input
              onChange={this.handleChange} name="userName"
              type="text" value={this.state.userName}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}


export default EditForm