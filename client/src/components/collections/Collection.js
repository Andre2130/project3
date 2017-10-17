import React from 'react'
import styled from 'styled-components'
import AlbumsList from '../album/AlbumsList'

// You can easily nest css components in your styled-components
// This gets converted into raw css when loaded on your page
const CollectionStyles = styled.div`
  height: 300px;
  width: 300px;
  margin: 20px;
  background-color: rgba(253, 255, 0, 0.79);
  input {
    font-weight: bold;
  }
  input, textarea {
    display: block;
    font-size: 1.2rem;
    margin: 10px 0;
    border: none;
    background-color: initial;
  }
  textarea{
    width: 95%;
    height: 70%
  }
`

const Collection = (props) => {
  // Creates a method that triggers another function being passed down 
  // another function
  const deleteCollection = () => {
    props.deleteCollection(props._id)
  }

  const handleChange = (event) => {
    props.handleChange(event, props._id)
  }
  const updateCollection = () => {
    props.updateCollection(props._id)
  }

  return (
    <CollectionStyles>
      {/* onBlur triggers whenever the user navigates off the input */}
      {/* {this.props.collections.map(collection => {
            return(<Link to={`/collections/${collection._id}`}>{collection.name}</Link>)
        })} */}
        <AlbumsList albums={props.albums}/>
      <input onChange={handleChange} name="name" value={props.name} />
      <textarea onBlur={updateCollection} onChange={handleChange} name="albums"/>
      <button onClick={deleteCollection}>Delete Collection</button>
    </CollectionStyles>
  )
}

export default Collection