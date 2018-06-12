import React from 'react';
import { StyleSheet } from 'react-native';
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
    Spinner
        } from "native-base";
import { createStackNavigator } from 'react-navigation';
import renderIf from '../custom/renderIf';

export default class Signup extends React.Component {

    constructor (props) {
        super(props);
        this.happysignup = this.happysignup.bind(this);
        this.showPassword = this.showPassword.bind(this);
        this.FormValidation = this.FormValidation.bind(this);
        this.state = {
            email : '',
            password : '',
            firstname : '',
            lastname : '',
            signupLoading : false,
            showPassword : true,
            emailerrorMsg : false,
            PassworderrorMsg : false
        };
    }

    showPassword() {
        if(this.state.showPassword == false) {
            this.setState({
                showPassword : true
            });
        }else{
            this.setState({
                showPassword : false
            });
        }
    }

    FormValidation(key, val) {
        switch (key) {
            case "email":
                let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
                if(reg.test(val) === false) {
                    this.setState({
                        email : val,
                        emailerrorMsg : true
                    });
                }else{
                    this.setState({
                        email : val,
                        emailerrorMsg : false
                    });
                }
            break;
            case "password":
                if(this.state.password <= 0) {
                    this.setState({
                        password : val,
                        PassworderrorMsg : true
                    });
                }else{
                    this.setState({
                        password : val,
                        PassworderrorMsg : false
                    });
                }
            break;
            default:
        }
    }

    happysignup () {
        this.setState({
            signupLoading : true
        });
        const { firstname }  = this.state;
        const { email }  = this.state;
        const { password }  = this.state;

        fetch('http://192.168.1.10/React/Native/AwesomeProject/src/server/UserRegistration.php', {
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
        })
        .then(function(response){
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then(function(responseJson){
            if(responseJson.data != null) {
                this.props.navigation.navigate('Home');
            }else{
                alert(responseJson.error);
            }
            this.setState({
                signupLoading : false
            });
        }.bind(this))
        .catch(function(error){
            console.error(error);
        });
    }   //Signup function ends

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
                        <Item error={false} floatingLabel>
                            <Label>Email</Label>
                            <Input
                                onChangeText={(email) => this.FormValidation("email",email)}
                                value={this.state.email}
                            />
                        </Item>
                        {renderIf(this.state.emailerrorMsg,
                            <Text style={{paddingLeft:15,color:"red"}}>Invalid E-mail Address!!</Text>
                        )}
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input secureTextEntry = {this.state.showPassword}
                                onChangeText={(password) => this.FormValidation("password",password)}
                                value={this.state.password}
                            />
                            <Icon onPress={this.showPassword} name="eye" style={this.state.showPassword ? style.hide : style.show}/>
                        </Item>
                        {renderIf(this.state.PassworderrorMsg,
                            <Text style={{paddingLeft:15,color:"red"}}>Password Required!!</Text>
                        )}
                        <Item floatingLabel>
                            <Label>First Name</Label>
                            <Input
                                onChangeText={(firstname) => this.setState({firstname})}
                                value={this.state.firstname}
                            />
                        </Item>
                        {renderIf(this.state.errorMsg,
                            <Text style={{paddingLeft:15,color:"red"}}>Error Msg Field!!</Text>
                        )}
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
                        onPress={this.FormValidation}
                    >
                        {this.state.signupLoading ?
                            <Spinner color='white' /> :
                            <Text>Sign Up</Text>
                        }
                    </Button>
                </Content>
            </Container>
        )
    }
}

const style = StyleSheet.create({
    show: {
        color : "#3b5bb2"
    }
});
