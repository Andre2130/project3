import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/home/HomePage'
import LogInPage from './components/login/LogInPage'
import CollectionsPage from './components/collections/CollectionsPage'
import NavBar from './components/NavBar'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/login" component={LogInPage}/>
             <Route exact path="/user/:userId" component={CollectionsPage}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
