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

  register = (registrationData) => {
    console.log("Here is the lifted registration data from app.js:", registrationData)
  }

  login = (loginData) => {
    console.log("Here is the lifted login data from app.js:", loginData)
  }

  render() {
    return (
      <div className="App">
      {
        this.state.loggedIn
        ?
        <TaqueriaContainer />
        :
        <LoginRegisterForm
          login={this.login}
          register={this.register}
        /> 
        // <TaqueriaContainer /> 
      }
      </div>
    )
  }
}
