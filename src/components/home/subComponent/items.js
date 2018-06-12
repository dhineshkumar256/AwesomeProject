import React from 'react';
import {
    Container,
    Header,
    Left,
    Icon,
    Button,
    Body,
    Title,
    Right
} from 'native-base';

export default class ItemScreen extends React.Component {

  constructor(props) {
    super(props);
    this.fnopenDrawer = this.fnopenDrawer.bind(this);
  }

  fnopenDrawer() {
      this.props.navigation.openDrawer();
  }

  render() {
      return(
        <Container>
            <Header>
                <Left>
                    <Button transparent
                        onPress={this.fnopenDrawer}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Items</Title>
                </Body>
                <Right/>
            </Header>
        </Container>
    )
  }
}