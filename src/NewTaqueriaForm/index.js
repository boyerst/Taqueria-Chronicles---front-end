import React, { Component } from 'react'
import { Form, Button, Grid, Segment, Message } from 'semantic-ui-react'

export default class NewTaqueriaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'',
      address: '',                            
      zip_code: '',
      rating: '',
      recommendations: ''
    }
  }
  render() {
    return(
      <Grid centered columns={2}>
      <Grid.Column>
        
        <Segment>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input
              name="name"
              type="text"
              fluid icon="user"
              iconPosition="left"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Form.Input
              name="address"
              type="text"
              fluid icon="address book"
              iconPosition="left"
              placeholder="Address"
              value={this.state.address}
              onChange={this.handleChange}
            />
            <Form.Input
              name="zipcode"
              type="text"
              fluid icon="map marker alternate"
              iconPosition="left"
              placeholder="Zip Code"
              value={this.state.zip_code}
              onChange={this.handleChange}
            />
              <Form.Input
              name="rating"
              type="text"
              fluid icon="star"
              iconPosition="left"
              placeholder="Rating"
              value={this.state.rating}
              onChange={this.handleChange}
            />
              <Form.Input
              name="recommendations"
              type="text"
              fluid icon="food"
              iconPosition="left"
              placeholder="Recommendations"
              value={this.state.recommendations}
              onChange={this.handleChange}
            />
            <Button type= "Submit" color="green" fluid size="large">
            Add Taqueria
            </Button>
          </Form>
        </Segment>
        <Message>
        
        </Message>
      </Grid.Column>
    </Grid>
    );
  }
}

    
  
