import React from 'react'
import styled from 'styled-components'
import User from './User'

const UsersListStyles = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`
// This is a simple stateless component that just loops through an array of props and renders another component
// Remember to pass props in as an argument when you use stateless functions.
const UsersList = (props) => {
  return (
    <UsersListStyles>
      {props.users.map((user) => {
        return (
          <User key={user._id} _id={user._id}
          handleChange={props.handleChange}
            userName={user.userName} users={user.users} deleteUser={props.deleteUser}/>
        )
      })}
    </UsersListStyles>
  )
}

export default UsersList