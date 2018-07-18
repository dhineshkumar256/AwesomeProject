import React from 'react';
import { Grid, Col } from 'react-native-easy-grid';
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
    Card,
    Picker
        } from "native-base";
import styles from "./style";
import ToastService from "../custom/toastservice";
import Spinner from 'react-native-loading-spinner-overlay';

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
            signupLoading : false,
            gohomeflag : false,
            showPassword : true,
            country: "IND"
        };
    }

    onValueChange(value: string) {
        this.setState({
          country: value
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

    FormValidation() {
        let bool = true;
        if(this.state.email == '' || this.state.password == '' || this.state.restname == ''){
            bool = false;
            ToastService("warning", "Fields Cannot be Empty");
        }
        if(this.state.email != ''){
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
            if(reg.test(this.state.email) === false) {
                bool = false;
                ToastService("warning", "Invalid Email Address !!");
            }
        }
        if(bool == true){
            this.happysignup();
        }
    }

    happysignup () {
        this.setState({
            signupLoading : true
        });
        const { restname }  = this.state;
        const { email }  = this.state;
        const { password }  = this.state;
        const { country } = this.state;

        fetch('http://192.168.1.6/React/Native/AwesomeProject/src/server/UserRegistration.php', {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                restname : restname,
                email : email,
                password : password,
                country : country
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
                ToastService("success", responseJson.data);
                this.setState({
                    gohomeflag : true,
                    signupLoading : false
                });
            }else{
                this.setState({
                    signupLoading : false
                });
                ToastService("warning", responseJson.error);
            }
        }.bind(this))
        .then(function(){
            if(this.state.gohomeflag == true){
                this.props.navigation.navigate('Home', {
                    username : email
                });
            }
        }.bind(this))
        .catch(function(error){
            this.setState({
                signupLoading : false
            });
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
                <Content padder>
                    <Card>
                        <Icon name="md-bowtie" style={styles.signupcardIcon}></Icon>
                        <Form>
                            <Item error={false} floatingLabel>
                                <Label>Email</Label>
                                <Input
                                    onChangeText={(email) => this.setState({email})}
                                    value={this.state.email}
                                />
                            </Item>
                            <Item floatingLabel>
                                <Label>Password</Label>
                                <Input secureTextEntry = {this.state.showPassword}
                                    onChangeText={(password) => this.setState({password})}
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
                                <Grid>
                                <Col style={{alignSelf: "center"}}>
                                    <Label>Country</Label>
                                </Col>
                                    <Col>
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
                                          selectedValue={this.state.country}
                                          onValueChange={this.onValueChange.bind(this)}
                                        >
                                              <Picker.Item label="USA" value="USA" />
                                              <Picker.Item label="UK" value="UK" />
                                              <Picker.Item label="IND" value="IND" />
                                              <Picker.Item label="AUS" value="AUS" />
                                              <Picker.Item label="CHINA" value="CHINA" />
                                        </Picker>
                                    </Col>
                                </Grid>
                            </Item>
                        </Form>
                        <Button block
                            style={{ margin: 15, marginTop: 50 }}
                            onPress={this.FormValidation}
                        >
                            <Text>Sign Up</Text>
                        </Button>
                    </Card>
                </Content>
                <Spinner visible={this.state.signupLoading} textContent={"Loading..."} animation={"fade"} textStyle={{color: '#FFF'}} />
            </Container>
        )
    }
}
