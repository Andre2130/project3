import React from 'react'
import styled from 'styled-components'
import Collection from './Collection'

const CollectionsListStyles = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`
// This is a simple stateless component that just loops through an array of props and renders another component
// Remember to pass props in as an argument when you use stateless functions.
const CollectionsList = (props) => {
  return (
    <CollectionsListStyles>
      {props.collections.map((collection) => {
        return (
          <Collection key={collection._id} _id={collection._id}
          handleChange={props.handleChange}
            name={collection.name} albums={collection.albums}
            deletecollection={this.deletecollection}
            />
        )
      })}
    </CollectionsListStyles>
  )
}

export default CollectionsList