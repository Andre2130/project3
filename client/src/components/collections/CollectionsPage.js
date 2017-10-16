import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import CollectionsList from './CollectionsList'

const CollectionTitleStyle = styled.div`
  text-align:center;
  button {
    margin: 30px auto;
    padding: 10px;
    border-width: 0;
    outline: none;
    border-radius: 2px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
    background-color: #215de5;
    color: #ecf0f1;
  }
`

class CollectionPage extends Component {
  state={
    user: {
      userName: '',
      password: '',
      collections: []
    }
  }

  // Get info about the user when it initially mounts 
  async componentWillMount () {
    const { userId } = this.props.match.params
    const res = await axios.get(`/api/users/${userId}`)
    this.setState({user: res.data})
  }

  // Create a Post for Collection
  // Create onClick that creates an empty Post
  createNewCollection = async () => {
    const { userId } = this.props.match.params
    const res = await axios.post(`/api/users/${userId}/collections`)
    console.log(res.data)
    this.setState({user: res.data})
  }

  // Create a Delete for Collection
  // Create onClick that deletes a post
  deleteCollection = async (CollectionId) => {
    const { userId } = this.props.match.params
    const id = CollectionId
    const res = await axios.delete(`/api/users/${userId}/Collections/${id}`)
    this.setState({user: res.data})
  }

  // Create a Patch for Collection
  // Add onChange listener for title and description
  handleChange = (event, CollectionId) => {
    const attribute = event.target.name
    const clonedUser = {...this.state.user}
    const collection = clonedUser.collections.find(i => i._id === CollectionId)
    console.log(collection)
    collection[attribute] = event.target.value
    this.setState({user: clonedUser})
  }
  // Trigger patch when leaving an input field
  updateCollection = async (collectionId) => {
    const { userId } = this.props.match.params
    const id = collectionId

    const clonedUser = {...this.state.user}
    const collection = clonedUser.collections.find(i => i._id === collectionId)

    const res = await axios.patch(`/api/users/${userId}/collections/${id}`, {
      collection: collection
    })
    this.setState({user: res.data})
  }

  render () {
    return (
      <div>
        <CollectionTitleStyle>
          <h1>{this.state.user.userName}'s Collection Board</h1>
          <button onClick={this.createNewCollection}>New Collection</button>
        </CollectionTitleStyle>
        <CollectionsList collections={this.state.user.Collections}
          handleChange={this.handleChange}
          deleteCollection={this.deleteCollection}
          updateCollection={this.updateCollection}
        />
      </div>
    )
  }
}
export default CollectionPage