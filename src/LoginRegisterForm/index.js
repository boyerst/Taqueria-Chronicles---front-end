import React, { Component } from 'react'

import { Form, Button, Grid, Segment, Header, Message } from 'semantic-ui-react'


export default class LoginRegisterForm extends Component {

  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      username: '',
      action: 'Register'
    }
  }

  changeForm = () => {
    if(this.state.action==="Login"){
      this.setState({action: "Register"})
    } else {
      this.setState({action: "Login"})
    }
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
                fluid icon="user"
                iconPosition="left"
                placeholder="Username"
                value={this.state.Username}
              />
            }
            <Form.Input
              fluid icon="address book"
              iconPosition="left"
              placeholder="Email address"
              value={this.state.email}
            />
            <Form.Input
              fluid icon="key"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={this.state.password}
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
          Need an account? <a href="">Register</a>
          </Message>
          :
          <Message>
          Already registered? <a href="">Log In</a>
          </Message>
        }
        </Message>
      </Grid.Column>
    </Grid>
    );
  }
}
