import React from 'react'
import styled from 'styled-components'
import Album from './Album'

const AlbumsListStyles = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`
// This is a simple stateless component that just loops through an array of props and renders another component
// Remember to pass props in as an argument when you use stateless functions.
const AlbumsList = (props) => {
  return (
    <AlbumsListStyles>
      {props.albums.map((album) => {
        return (
          <Album key={album._id} _id={album._id}
          handleChange={props.handleChange}
            name={album.name} albums={album.albums}/>
        )
      })}
    </AlbumsListStyles>
  )
}

export default AlbumsList