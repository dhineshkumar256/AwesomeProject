import React from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
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
    Spinner,
    Card,
    Picker
        } from "native-base";
import styles from "./style";

export default class Signup extends React.Component {

    constructor (props) {
        super(props);
        this.happysignup = this.happysignup.bind(this);
        this.showPassword = this.showPassword.bind(this);
        this.FormValidation = this.FormValidation.bind(this);
        this.state = {
            email : '',
            password : '',
            restname : '',
            lastname : '',
            signupLoading : false,
            showPassword : true,
            selected: "key1"
        };
    }

    onValueChange(value: string) {
        this.setState({
          selected: value
        });
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

                }
            break;
            case "password":
                if(this.state.password != 0) {
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
        const { restname }  = this.state;
        const { email }  = this.state;
        const { password }  = this.state;

        fetch('http://192.168.1.10/React/Native/AwesomeProject/src/server/UserRegistration.php', {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                name : restname,
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
            <Container>
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
                <KeyboardAvoidingView style={{flex:1}} behaviour="margin" enabled>
                <ScrollView>
                <Content padder>
                    <Card>
                        <Icon name="md-bowtie" style={styles.signupcardIcon}></Icon>
                        <Form>
                            <Item error={false} floatingLabel>
                                <Label>Email</Label>
                                <Input
                                    onChangeText={(email) => this.FormValidation("email",email)}
                                    value={this.state.email}
                                />
                            </Item>
                            <Item floatingLabel>
                                <Label>Password</Label>
                                <Input secureTextEntry = {this.state.showPassword}
                                    onChangeText={(password) => this.FormValidation("password",password)}
                                    value={this.state.password}
                                />
                                <Icon onPress={this.showPassword} name="eye" style={this.state.showPassword ? styles.hide : styles.show}/>
                            </Item>
                            <Item floatingLabel>
                                <Label>Restaurant Name</Label>
                                <Input
                                    onChangeText={(restname) => this.setState({restname})}
                                    value={this.state.restname}
                                />
                            </Item>
                            <Item style={{marginTop: 10}}>
                                <Picker
                                  mode="dropdown"
                                  Header="Select your Country"
                                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                                  style={{ width: undefined }}
                                  textStyle={{ color: "#5cb85c" }}
                                  itemStyle={{
                                    backgroundColor: "#d3d3d3",
                                    marginLeft: 0,
                                    paddingLeft: 10
                                  }}
                                  itemTextStyle={{ color: '#788ad2' }}
                                  selectedValue={this.state.selected}
                                  onValueChange={this.onValueChange.bind(this)}
                                >
                                      <Picker.Item label="USA" value="key0" />
                                      <Picker.Item label="UK" value="key1" />
                                      <Picker.Item label="IND" value="key2" />
                                      <Picker.Item label="AUS" value="key3" />
                                      <Picker.Item label="CHINA" value="key4" />
                                </Picker>
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
                    </Card>
                </Content>
                </ScrollView>
                </KeyboardAvoidingView>
            </Container>
        )
    }
}
