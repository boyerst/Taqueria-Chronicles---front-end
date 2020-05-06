import React, { Component } from 'react'
import { Form, Button, Segment, Modal, Header, Rating } from 'semantic-ui-react'
import '../index.css'

export default class EditTaqueriaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.taqueriaToEdit.name,
      address: props.taqueriaToEdit.address,                            
      zip_code: props.taqueriaToEdit.zip_code,
      rating: props.taqueriaToEdit.rating,
      recommendations: props.taqueriaToEdit.recommendations
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateTaqueria(this.state)

  }


  handleRate = (event, { rating, maxRating }) => {
    
    this.setState({ rating, maxRating })


  }




  render() {
    
    return (
      <Modal open={true} basic size= "small"  onClose={this.props.closeModal}>
      <Header>
        <h3>Enter Updated Information</h3>
        </Header>
        <Modal.Content>
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
            <Form.Input className="rating">
              <Rating 
              name="rating" 
              icon="star" 
              maxRating={5} 
              onRate={this.handleRate} 
              onChange={this.handleChange} 
              defaultRating={this.state.rating} 
              value={this.state.rating} 
              />
            </Form.Input>
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
          <Modal.Actions>
            <Button type="Submit">Update Taqueria</Button>
          </Modal.Actions>
        </Form>
        </Segment>
        </Modal.Content>
      </Modal>
    )

  }
}
