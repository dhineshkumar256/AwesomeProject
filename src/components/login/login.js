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
import Spinner from 'react-native-loading-spinner-overlay';

export default class Login extends React.Component {
    constructor(props){
        super(props);
        global.REST_ID = '';
        this.happylogin = this.happylogin.bind(this);
        this.showPasswordL = this.showPasswordL.bind(this);
        this.FormValidation = this.FormValidation.bind(this);
        this.state = {
            username : '',
            password : '',
            showToast: false,
            validEcheck: false,
            showPasswordL: true,
            loginLoading : false
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

    FormValidation() {
        let bool = true;
        if(this.state.username == '' || this.state.password == ''){
            ToastService("warning", "Fields Cannot be Empty");
            bool = false;
            this.setState({
                validEcheck: true
            });
        }
        if(this.state.username != ''){
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
            if(reg.test(this.state.username) === false) {
                bool = false;
                ToastService("warning", "Invalid Email Address !!");
            }
        }
        if(bool){
            this.happylogin();
        }
    }

    happylogin (){
        this.setState({
            loginLoading : true
        });

        const { username }  = this.state;
        const { password }  = this.state;

        fetch('http://192.168.1.6/React/Native/AwesomeProject/src/server/UserLogin.php', {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                username : username,
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
                this.setState({
                    loginLoading : false,
                    validEcheck: false,
                    username: '',
                    password: '',
                });
                global.REST_ID = responseJson.REST_ID;
                this.props.navigation.navigate('Home', {
                    username : username
                });
            }else{
                this.setState({
                    loginLoading : false,
                })
                ToastService("warning", responseJson.error);
            }
        }.bind(this))
        .catch(function(error){
            this.setState({
                loginLoading : false,
            });
            console.error(error);
        }.bind(this));
    }
    render() {
        return (
            <Container>
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

                <Content padder>
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
                            onPress={this.FormValidation}>
                            <Text>Log In</Text>
                        </Button>
                    </Card>
                </Content>
                <Spinner visible={this.state.loginLoading} textContent={"Loading..."} animation={"fade"} textStyle={{color: '#FFF'}} />
            </Container>
        )
    }
};
