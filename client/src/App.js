import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/home/HomePage'
import LogInPage from './components/login/LogInPage'
import CollectionsPage from './components/collections/CollectionsPage'
import NavBar from './components/NavBar'
import axios from 'axios'

class App extends Component {
  state = {
    users: [],
   collections: []

  }
  

  getAllUsers = async () => {
    console.log('getting users')
    try {
      const res = await axios.get('/api/users')
      console.log(res)
      this.setState({users: res.data})
    } catch (err) {
      console.log(err)
    }
  }
  getAllCollections = async () => {
    try{
      const res =await axios.get('/api/collections')
      this.setState({collections: res.data})
    }catch (err){
      console.log(err)
    }
  }

  componentWillMount(){
    this.getAllUsers()
    this.getAllCollections()
  }

  render () {

    const LogInPageComponent = () => (<LogInPage users={this.state.users} />)
    const CollectionPageComponent = () => (<CollectionsPage collections={this.state.collections} />)
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/login" render={LogInPageComponent}/>
             <Route exact path="/collections" render={CollectionPageComponent}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
