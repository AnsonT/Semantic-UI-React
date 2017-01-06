import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'

export default class MenuExamplePointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} >Home</Menu.Item>
          <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} >Messages</Menu.Item>
          <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} >Friends</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment>
          <img src='http://semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
      </div>
    )
  }
}
