import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import CollectionsList from './CollectionsList'
import AlbumList from '../album/AlbumsList'
import { Link } from 'react-router-dom'

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
    deletecollection = async (collectionId) => {
        //const { collectionId } = this.props.match.params
        //const id = collectionId
        const res = await axios.delete(`/api/collections/${collectionId}`)
        this.setState({collection: res.data})
      }


  render () {
    return (
      <div>
        <CollectionTitleStyle>
          <h1>Collection Board</h1>
          <button onClick={this.createNewCollection}>New Collection</button>
        </CollectionTitleStyle>
        <CollectionsList collections={this.props.collections}
        deletecollection={this.deletecollection}
        />
       
      </div>
    )
  }
}
export default CollectionPage