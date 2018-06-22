import React from 'react';
import {
    Container,
    Header,
    Left,
    Button,
    Icon,
    Body,
    Right,
    Title,
    Content,
    Text
} from 'native-base';
export default class OrderScreen extends React.Component {
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
                    <Title>Orders</Title>
                </Body>
                <Right/>
            </Header>
            <Content padder>
                <Text>Order screen</Text>
            </Content>
        </Container>
    )
  }
}
