import React from 'react'
import styled from 'styled-components'

// You can easily nest css components in your styled-components
// This gets converted into raw css when loaded on your page
const AlbumStyles = styled.div`
  height: 30px;
  width: 30px;
  margin: 20px;
  background-color: rgba(0, 0, 0, 0.79);
  input {
    font-weight: bold;
  }
  input, textarea {
    display: block;
    font-size: 1.2rem;
    margin: 10px 0;
    border: none;
    background-color: rgba(0, 0, 0, 0);
  }
  textarea{
    width: 50%;
    height: 50%
  }
`

const Album = (props) => {
  // Creates a method that triggers another function being passed down 
  // another function
  const deleteAlbum = () => {
    props.deleteAlbum(props._id)
  }

  const handleChange = (event) => {
    props.handleChange(event, props._id)
  }
  const updateAlbum = () => {
    props.updateAlbum(props._id)
  }

  return (
    <AlbumStyles>
      {/* onBlur triggers whenever the user navigates off the input */}
      <input onChange={handleChange} name="name" value={props.name} />
      <textarea onBlur={updateAlbum} onChange={handleChange} name="albums" value={props.albums}/>
      <button onClick={deleteAlbum}>Delete Album</button>
    </AlbumStyles>
  )
}

export default Album