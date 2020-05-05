import React, { Component } from 'react';
import './App.css';
import TaqueriaContainer from './TaqueriaContainer'
import LoginRegisterForm from './LoginRegisterForm'
import MenuComponent from './MenuComponent'


export default class App extends Component {
  constructor() {
    super()
    this.state = { 
      loggedIn: false,  //CHANGE BACK TO FALSE
      loggedInUserEmail: ''
    }
  }

  register = async (registrationData) => {
    console.log("Here is the lifted registration data:", registrationData);
    const url = process.env.REACT_APP_API_URL + '/api/v1/users/register'
    try {
      const registerResponse = await fetch(url, {
        credentials: 'include', 
        method: 'POST',
        body: JSON.stringify(registrationData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log("registerResponse", registerResponse)
      const registerJson = await registerResponse.json()
      console.log("registerJson", registerJson)

      if(registerResponse.status === 201) {
        this.setState({
          loggedIn: true, 
          loggedInUserEmail: registerJson.data.email
        })
      }

    } catch(error) {
      console.log("Error in registration route. Check API configuration.")
      console.log(error)
    } 

  }

  login = async (loginData) => {
    console.log("TaqCont/App.js: Here is the lifted login data:", loginData);
    const url = process.env.REACT_APP_API_URL + '/api/v1/users/login'

    try {
      const loginResponse = await fetch(url, {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(loginData),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      console.log("loginResponse", loginResponse);
      const loginJson = await loginResponse.json()
      console.log("loginJson", loginJson);
      if(loginResponse.status === 200) {
        this.setState({
          loggedIn: true,
          loggedInUserEmail: loginJson.data.email
        })
      }


    } catch(error) {
      console.error("Error in login route.")
      console.error(error)
    }
  }


   logout = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + '/api/v1/users/logout'

      const logoutResponse = await fetch(url, {
        credentials: 'include',
        'Accept': 'application/json'
      })
      console.log("logoutResponse", logoutResponse)
      const logoutJson = await logoutResponse.json()
      console.log("logoutJson", logoutJson)
      if(logoutResponse.status === 200) {
        this.setState({
          loggedIn: false,
          loggedInUserEmail: ''
        })
      }
    } catch(error) {
      console.error("There was an error logging out")
      console.error(error)
    }
  }





  render() {
    return (
      <div className="App">
      {
        this.state.loggedIn
        ?
        <React.Fragment>
          <MenuComponent email={this.state.loggedInUserEmail} logout={this.logout}/>
          <TaqueriaContainer />

        </React.Fragment>
        :
        
        <LoginRegisterForm
          login={this.login}
          register={this.register}
        /> 
    
    
      }
      </div>
    )
  }
}
