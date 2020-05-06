import React, { Component } from 'react'

import { Form, Button, Grid, Segment, Message } from 'semantic-ui-react'


export default class LoginRegisterForm extends Component {

  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      username: '',
      action: 'Login'
    }
  }

  changeForm = () => {
    if(this.state.action==="Login"){
      this.setState({action: "Register"})
    } else {
      this.setState({action: "Login"})
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(`LoginRegForm/index.js: You are attempting to ${this.state.action.toLowerCase()} with these inputs`)
    console.log(this.state)
  

    if(this.state.action === "Register") {
      this.props.register(this.state)
    } else {
      this.props.login(this.state)
    }
  }


  render() {
    return (

    <Grid className="login" justify={"center"} columns={2} padded>
    
      <Grid.Column>
        <Segment>
          <Form onSubmit={this.handleSubmit}>
            {this.state.action==="Register"
            &&
              <Form.Input
                name="username"
                type="text"
                fluid icon="user"
                iconPosition="left"
                placeholder="Username"
                value={this.state.Username}
                onChange={this.handleChange}
              />
            }
            <Form.Input
              name="email"
              type="email"
              fluid icon="address book"
              iconPosition="left"
              placeholder="Email address"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <Form.Input
              name="password"
              type="password"
              fluid icon="key"
              iconPosition="left"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <Button type= "Submit" color="green" fluid size="large">
              {this.state.action==="Login" ? "Log In": "Register"}
            </Button>
          </Form>
        </Segment>
        <Message>
        {
          this.state.action==="Login"
          ?
          <Message>
          Need an account? <span className="link" onClick={this.changeForm}>Register</span>
          </Message> //change <a>s to span with class if have issues in future
          :
          <Message>
          Already registered? <span className="link" onClick={this.changeForm}>Log In</span>
          </Message>
        }
        </Message>
      </Grid.Column>
    </Grid>
    );
  }
}
