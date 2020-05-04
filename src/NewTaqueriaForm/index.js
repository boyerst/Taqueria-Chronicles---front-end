import React, { Component } from 'react'
import { Form, Button, Grid, Segment, Message, Rating } from 'semantic-ui-react'

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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createTaqueria(this.state) 
    this.setState({
      name: '',
      address: '',
      zip_code: '',
      rating: '',
      recommendations: ''
    })
  }

  handleRate = (event, { rating, maxRating }) =>
    this.setState({ rating, maxRating })


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
              name="zip_code"
              type="text"
              fluid icon="map marker alternate"
              iconPosition="left"
              placeholder="Zip Code"
              value={this.state.zip_code}
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
            <div>
              <Rating icon="star" maxRating={5} onRate={this.handleRate} defaultRating={0} />
            </div>
            <Button type= "Submit" color="green" fluid size="large">
            Add Taqueria
            </Button>
          </Form>
        </Segment>

      </Grid.Column>
    </Grid>
    );
  }
}

    
  
