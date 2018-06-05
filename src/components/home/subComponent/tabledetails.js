import React from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Left, Title, Button, Body, Segment } from 'native-base';
import { StackActions } from 'react-navigation';

export default class TableDetails extends React.Component {
  constructor(props) {
    super(props);
    this.fngoBack = this.fngoBack.bind(this);
    this.state = {
      seg: 1
    };
  }

  fngoBack() {
    const popAction = StackActions.pop({
      n:1,
    });
    this.props.navigation.dispatch(popAction);
  }
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={this.fngoBack}>
              <Icon name='md-close' />
            </Button>
          </Left>
          <Body>
            <Title>Table 1</Title>
          </Body>
          <Right/>
        </Header>
        <Segment>
          <Button
            first
            active={this.state.seg === 1 ? true : false}
            onPress={() => this.setState({ seg: 1 })}>
            <Text>TOTAL</Text>
          </Button>
          <Button
            active={this.state.seg === 2 ? true : false}
            onPress={() => this.setState({ seg: 2 })}>
            <Text>MAIN</Text>
          </Button>
          <Button
            active={this.state.seg === 3 ? true : false}
            onPress={() => this.setState({ seg: 3 })}>
            <Text>BEVERAGES</Text>
          </Button>
          <Button
            last
            active={this.state.seg === 4 ? true : false}
            onPress={() => this.setState({ seg: 4 })}>
            <Text>MENU</Text>
          </Button>
        </Segment>
        <Content padder>
          {this.state.seg === 1 && <Text>Total works</Text>}
          {this.state.seg === 2 && <Text>main works</Text>}
          {this.state.seg === 3 && <Text>beverge work</Text>}
          {this.state.seg === 4 && <Text>menu work</Text>}
        </Content>
      </Container>
    )
  }
}
