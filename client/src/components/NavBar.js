import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBarStyles = styled.div`
background-color: white;
display: flex;
justify-content: space-between;
height: 50px;
`

const NavBar = () => {
  return (
    <NavBarStyles>
      <div>
        {/* Link is the React Router way of navigating to other parts of your app. */}
        {/* Use this instead of <a/> tags */}
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/login">LogIn</Link>
      </div>
      <div>
          <Link to="/collections">Collections</Link>
      </div>
    </NavBarStyles>
  )
}

export default NavBar