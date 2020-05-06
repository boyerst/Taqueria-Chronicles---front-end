import React, { Component } from 'react'
import { Form, Button, Icon, Segment, Header, Rating, Modal } from 'semantic-ui-react'

export default class NewTaqueriaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'',
      address: '',                            
      zip_code: '',
      rating: '',
      recommendations: '',
      modalOpen: false

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
      recommendations: '',
      modalOpen: false
    })
  }

  handleRate = (event, { rating, maxRating }) =>
    this.setState({ rating, maxRating })

 
  handleOpen = () => this.setState({ modalOpen: true })



  render() {
  return(
    <Modal 
    className="add-taqueria"
    primary
    basic size= "large" 
    trigger={<Button onClick={this.handleOpen}>Add New Taqueria</Button>}
    open={this.state.modalOpen}
    onClose={this.handleClose}
    >
    <Header>
      <h3>Add New Taqueria</h3>
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
            <Form.Input
            name="recommendations"
            type="text"
            fluid icon="food"
            iconPosition="left"
            placeholder="Recommendations"
            value={this.state.recommendations}
            onChange={this.handleChange}
          />
          <Form.Input>
            Rating: 
            <Rating 
              icon="star" 
              maxRating={5} 
              onRate={this.handleRate} 
              defaultRating={0} 
            />
          </Form.Input>
          <br/>
          <Modal.Actions>
          <Button 
            type= "Submit" 
            color="green" 
            onClick={this.handleClose}>
              <Icon name='thumbs up' />
            Add Taqueria
          </Button>
          &nbsp;
          <Button 
            color='grey' 
            onClick={this.handleClose}>
              <Icon name='undo' /> 
            Go Back
          </Button>
          </Modal.Actions>
        </Form>
      </Segment>
    </Modal.Content>
    </Modal>
    );
  }
}





    
  
