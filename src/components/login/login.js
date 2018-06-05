import React from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text, Toast
} from "native-base";
import { createStackNavigator } from 'react-navigation';

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showToast: false
    };
    this.happylogin = this.happylogin.bind(this);
    this.state = {
      username : '',
      password : ''
    };
  }
  happylogin (){
    if(this.state.username == '' || this.state.password == '') {
      alert('Fields should not be empty!');
    }else{
      this.props.navigation.navigate('Home', {
        username : this.state.username,
      //  password : this.state.password
      });
    }
  }
  render() {
    return (
        <Container style={{backgroundColor: "#FFF"}}>
          <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>LogIn</Title>
            </Body>
            <Right />
          </Header>

          <Content>
            <Form>
              <Item floatingLabel>
                <Label>Username</Label>
                  <Input
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                  />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                  <Input secureTextEntry
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                  />
              </Item>
            </Form>
            <Button block
              style={{ margin: 15, marginTop: 50 }}
              onPress={this.happylogin}>
              <Text>Log In</Text>
            </Button>
        </Content>
      </Container>
    )
  }
};
