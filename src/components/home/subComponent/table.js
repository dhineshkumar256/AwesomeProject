import React from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Grid, Col, Row, Right, Left, Title, Button, Body } from 'native-base';
import { createStackNavigator } from 'react-navigation';

export default class TableScreen extends React.Component {

  constructor(props) {
    super(props);
    this.fnopenDrawer = this.fnopenDrawer.bind(this);
    this.fnOpenTableDetails = this.fnOpenTableDetails.bind(this);
  }

  fnopenDrawer() {
    this.props.navigation.openDrawer()
  }

  fnOpenTableDetails() {
    this.props.navigation.navigate('TableDetails');
  }

  static navigationOptions = {
    drawerLabel: 'TABLE',
    drawerIcon: <Icon name='md-grid'/>
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
            <Title>TABLES</Title>
          </Body>
          <Right/>
        </Header>
        <Card style={{backgroundColor: "powderblue"}}>
          <Grid>
            <Col>
              <Row>
                <Button bordered dark style={{width:40, margin:30, borderRadius:60}}>
                  <Text>1</Text>
                </Button>
              </Row>
              <Row>
                <Button bordered dark style={{width:80, height:80, borderRadius:60}}>
                  <Text>3</Text>
                </Button>
              </Row>
              <Row>
                <Button bordered dark style={{width:100, height:100, borderRadius:80}}>
                  <Text>5</Text>
                </Button>
              </Row>
            </Col>
            <Col>
              <Row>
                <Button bordered dark style={{width:40, margin:30}}>
                  <Text>2</Text>
                </Button>
              </Row>
              <Row>
                <Button bordered dark style={{width:80, height:80}}>
                  <Text>4</Text>
                </Button>
              </Row>
              <Row>
                <Button bordered dark style={{width:150,height:50}}>
                  <Text>6</Text>
                </Button>
              </Row>
            </Col>
          </Grid>
        </Card>
        <Card>
          <Grid>
            <Row>
              <Col>
                <Button block bordered style={{margin:10}}  onPress={this.fnOpenTableDetails}>
                  <Text>1</Text>
                </Button>
                <Button block bordered style={{margin:10}}>
                  <Text>3</Text>
                </Button>
                <Button block bordered style={{margin:10}}>
                  <Text>6</Text>
                </Button>
              </Col>
              <Col>
                <Button block bordered style={{margin:10}}>
                  <Text>2</Text>
                </Button>
                <Button block bordered style={{margin:10}}>
                  <Text>4</Text>
                </Button>
                <Button block bordered style={{margin:10}}>
                  <Text>6</Text>
                </Button>
              </Col>
            </Row>
          </Grid>
        </Card>
      </Container>
    );
  }
}
