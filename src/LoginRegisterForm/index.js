import React, { Component } from 'react'

import { Form, Button, Grid, Segment, Header, Message } from 'semantic-ui-react'


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

  render() {
    return (
    <Grid centered columns={2}>
      <Grid.Column>
        
        <Segment>
          <Form>
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
              type="password"
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
          Need an account? <a href="" onClick={this.changeForm}>Register</a>
          </Message> //change <a>s to span with class if have issues in future
          :
          <Message>
          Already registered? <a href="" onClick={this.changeForm}>Log In</a>
          </Message>
        }
        </Message>
      </Grid.Column>
    </Grid>
    );
  }
}
