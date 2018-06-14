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
  Text,
  Card
} from "native-base";
import styles from "./style";
import ToastService from "../custom/toastservice";

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.happylogin = this.happylogin.bind(this);
    this.showPasswordL = this.showPasswordL.bind(this);
    this.state = {
      username : '',
      password : '',
      showToast: false,
      validEcheck: false,
      showPasswordL: true
    };
  }

  showPasswordL() {
      if(this.state.showPasswordL == false) {
          this.setState({
              showPasswordL : true
          });
      }else{
          this.setState({
              showPasswordL : false
          });
      }
  }

  happylogin (){
    if(this.state.username == '' || this.state.password == '') {
        ToastService("warning", "Fill all the Field!!");
        this.setState({
            validEcheck: true
        });
    }else{
      this.props.navigation.navigate('Home', {
        username : this.state.username,
      //  password : this.state.password
      });
      this.setState({
          validEcheck: false,
          username: '',
          password: '',
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
            <Card style={styles.logincard}>
                <Icon name="md-bowtie" style={styles.logincardIcon}></Icon>
                <Form>
                  <Item floatingLabel error={this.state.validEcheck}>
                    <Label>Username/ID</Label>
                      <Input
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}
                      />
                      {this.state.validEcheck && <Icon name='close-circle' />}
                  </Item>
                  <Item floatingLabel>
                    <Label>Password</Label>
                      <Input secureTextEntry = {this.state.showPasswordL}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                      />
                      <Icon onPress={this.showPasswordL} name="eye" style={this.state.showPasswordL ? styles.hide : styles.show}/>
                  </Item>
                </Form>
                <Button block
                  style={{ margin: 15, marginTop: 50 }}
                  onPress={this.happylogin}>
                  <Text>Log In</Text>
                </Button>
            </Card>
        </Content>
      </Container>
    )
  }
};
