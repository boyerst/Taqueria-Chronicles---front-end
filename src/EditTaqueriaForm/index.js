import React, { Component } from 'react'
import { Form, Button, Grid, Segment, Message, Modal, Header, Rating, Icon } from 'semantic-ui-react'
import SkyLight from 'react-skylight'

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

  handleRate = (event, { rating, maxRating }) =>
    this.setState({ rating, maxRating })




  render() {
    
    return (
      <Modal open={true} basic size= "small"  onClose={this.props.closeModal}>
      <Header>
        <h3>Enter Updated Information</h3>
        </Header>
        <Modal.Content>
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
            <Form>
              <Rating icon="star" maxRating={5} onRate={this.handleRate} />
            </Form>
       
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
        </Modal.Content>
      </Modal>
    )

  }
}
//   render() {
//     return(
//       <div>
//         <section>
//           <h1>React SkyLight</h1>
//           <button onClick={() => this.simpleDialog.show()}>Open Modal</button>
//         </section>
//         <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Hi, I'm a simple modal">
//           Hello, I dont have any callback.
//         </SkyLight>
//       </div>
//     )
//   }
// }