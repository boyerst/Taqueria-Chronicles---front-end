import React, { Component } from 'react';
import './App.css';
import TaqueriaContainer from './TaqueriaContainer'
import LoginRegisterForm from './LoginRegisterForm'

export default class App extends Component {
  constructor() {
    super()
    this.state = { 
      loggedIn: false, 
      loggedInUserEmail: ''
    }
  }
  render() {
    return (
      <div className="App">
      {
        this.state.loggedIn
        ?
        <TaqueriaContainer />
        :
        <LoginRegisterForm /> 
        // <TaqueriaContainer /> 
      }
      </div>
    )
  }
}
