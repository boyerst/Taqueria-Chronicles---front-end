import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import ReactDOM from 'react-dom';



export default class MenuComponent extends Component {
  state = { activeItem: 'logout' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })





render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item
          name='logout'
          active={activeItem === 'logout'}
          onClick={this.props.logout}
        />
        <Menu.Item
          name='addNewTaqueria'
          active={activeItem === 'addNewTaqueria'}
          onClick={this.props.logout}
        />
      </Menu>
    )
  }
}