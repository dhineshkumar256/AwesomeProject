import React from 'react';
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, Text, Icon } from "native-base";
import { Grid, Row } from "react-native-easy-grid";
import styles from "./styles";

const launchscreenBg = require("../../assets/images/test.png");

export default class Splashscreen extends React.Component {

  constructor(props) {
    super(props);
    this.goLogin = this.goLogin.bind(this);
    this.goSingup = this.goSingup.bind(this);
  }
  goLogin (){
    this.props.navigation.navigate('Login');
  }
  goSingup () {
    this.props.navigation.navigate('Signup');
  }
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground style={styles.logo} />
            <Text style={styles.text}>HappieWaiter</Text>
            <Icon name="md-bowtie" style={styles.logoicon}></Icon>
            <Text style={{alignSelf: "center", fontSize: 30, color: "#ff7e00"}}>POINT OF SALE</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              marginBottom: 50,
              backgroundColor: "transparent"
            }}
          >
            <View style={{ marginTop: 8 }} />
            <View style={{ marginTop: 8 }} />
          </View>
          <View style={{ marginBottom: 20, padding: 10, paddingBottom: 0 }}>
            <Button block primary
              onPress={this.goLogin}
            >
              <Text>LOGIN</Text>
            </Button>
          </View>
          <View style={{ marginBottom: 80 }}>
            <Button block transparent
              onPress={this.goSingup}
            >
              <Text>Create an account</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>

    )
  }
};
