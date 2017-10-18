import React from 'react'
import styled from 'styled-components'


// You can easily nest css components in your styled-components
// This gets converted into raw css when loaded on your page
const UserStyles = styled.div`
  height: 300px;
  width: 300px;
  margin: 20px;
  background-image: url("https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg");
  background-position: center;
  input {
    font-weight: bold;
  }
  input, textarea {
    display: block;
    font-size: 1.2rem;
    margin: 10px 0;
    border: none;
  }
  textarea{
    width: 50%;
    height: 50%
  }
`

const User = (props) => {
  // Creates a method that triggers another function being passed down 
  // another function
//   const deleteUser = () => {
//     props.deleteUser(props._id)
//   }

  const handleChange = (event) => {
    props.handleChange(event, props._id)
  }
  const updateUser = () => {
    props.updateUser(props._id)
  }
  const deleteUser = () => {
    props.deleteUser(props._id)
  }
  return (
    <UserStyles>
      {/* onBlur triggers whenever the user navigates off the input */}
      {/* <input onChange={handleChange} name="name" value={props.userName} />
      <textarea onBlur={updateUser} onChange={handleChange} name="users" value={props.users}/> */}
      <h1>{props.userName}</h1>
      <button onClick={deleteUser}>Delete User</button>
    </UserStyles>
  )
}

export default User