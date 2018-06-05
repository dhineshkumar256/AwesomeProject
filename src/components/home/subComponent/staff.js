import React from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Left, Title, Button, Body } from 'native-base';

export default class StaffScreen extends React.Component {

  constructor(props) {
    super(props);
    this.fnopenDrawer = this.fnopenDrawer.bind(this);
  }

  fnopenDrawer() {
    this.props.navigation.openDrawer()
  }

  static navigationOptions = {
    drawerLabel: 'STAFF',
    drawerIcon: <Icon name='md-person'/>
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent
              onPress={this.fnopenDrawer}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>STAFF</Title>
          </Body>
          <Right/>
        </Header>
      </Container>
    );
  }
}
