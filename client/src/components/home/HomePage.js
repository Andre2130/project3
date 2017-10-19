import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Home = styled.div`
text-align: center;
background-color: red;
`
const ButtonSty = styled.div`
color:red;
`

class HomePage extends Component {
    render() {
        return(
            <Home>
                <h1>Sauce Radio</h1>
                <ButtonSty>
                <button><Link to={`/user`}>Enter The Sauce</Link></button>
                </ButtonSty>
            </Home>
        )
    }
}

export default HomePage