import React, { Component } from 'react'

import { Form, Button, Label, Grid, Segment, Header, Message } from 'semantic-ui-react'


export default class LoginRegisterForm extends Component {

  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      username: ''
    }
  }

  render() {
    return (
    <Grid centered columns={2}>
      <Grid.Column>
        <Header as="h2" textAlign="center">
          Login
        </Header>
        <Segment>
          <Form>
            <Form.Input
              
              ui fluid icon="address book icon"
              iconPosition="left"
              placeholder="Email address"
            />
            <Form.Input
              ui fluid icon="key icon"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
            <Button type= "Submit" color="green" fluid size="large">
              Login
            </Button>
          </Form>
        </Segment>
        <Message>
          Not an account? <a href="#">Register</a>
        </Message>
      </Grid.Column>
    </Grid>
    );
  }
}
