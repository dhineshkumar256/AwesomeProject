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
  Text
} from "native-base";
import { createStackNavigator } from 'react-navigation';

export default class Signup extends React.Component {

  constructor (props) {
    super(props);
    this.happysignup = this.happysignup.bind(this);
    this.state = {
      email : '',
      password : '',
      pin : '',
      firstname : '',
      lastname : ''
    };
  }

  happysignup () {

    const { firstname }  = this.state;
    const { email }  = this.state;
    const { password }  = this.state;

    fetch('http://192.168.1.40/React/Native/AwesomeProject/src/server/UserRegistration.php', {
      method : 'POST',
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        name : firstname,
        email : email,
        password : password
      })
    }).then(function(response){
      console.log(response.json());
      if(response.status == 200) {
        this.props.navigation.navigate('Home');
      }else{
        alert('Something went Wrong!!');
      }
    }.bind(this))
    .catch(function(error){
      console.log(error);
    })
  }

  render () {
    return(
      <Container style={{backgroundColor: "#FFF"}}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Signup</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
                <Input
                  onChangeText={(email) => this.setState({email})}
                  value={this.state.email}
                />
            </Item>
            <Item floatingLabel>
            <Label>Password</Label>
            <Input secureTextEntry
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            />
            </Item>
            <Item floatingLabel>
              <Label>PIN</Label>
                <Input
                  onChangeText={(pin) => this.setState({pin})}
                  value={this.state.pin}
                />
            </Item>
            <Item floatingLabel>
              <Label>First Name</Label>
                <Input
                  onChangeText={(firstname) => this.setState({firstname})}
                  value={this.state.firstname}
                />
            </Item>
            <Item floatingLabel last>
              <Label>Last Name</Label>
                <Input
                  onChangeText={(lastname) => this.setState({lastname})}
                  value={this.state.lastname}
                />
            </Item>
          </Form>
          <Button block
            style={{ margin: 15, marginTop: 50 }}
            onPress={this.happysignup}>
            <Text>Sign Up</Text>
          </Button>
      </Content>
    </Container>
    )
  }
}
