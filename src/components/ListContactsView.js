'use strict'

import React, { Component } from 'react';

import { Container, Header, Title, Button, Icon } from 'native-base';

export class ListContactsView extends Component {

  constructor(props) {
    super(props);

  }

  subMenu() {
    console.log('Presionado');
  }

  render() {
    return (
      <Container>
        <Header>
          <Button transparent onPress={(this.subMenu.bind(this))}>
            <Icon name='ios-arrow-back' />
          </Button>

          <Title>Header</Title>

          <Button transparent>
            <Icon name='ios-menu' />
          </Button>
        </Header>
      </Container>
    );
  }
}
