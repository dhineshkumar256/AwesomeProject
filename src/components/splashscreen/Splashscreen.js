import React from 'react';
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text } from "native-base";
import { Grid, Row } from "react-native-easy-grid";
import styles from "./styles";

const launchscreenBg = require("../../assets/images/launchscreen-bg.png");

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
          </View>
          <View
            style={{
              alignItems: "center",
              marginBottom: 50,
              backgroundColor: "transparent"
            }}
          >
            <H3 style={styles.text}>Welcome Back !!</H3>
            <View style={{ marginTop: 8 }} />
            <View style={{ marginTop: 8 }} />
          </View>
          <View style={{ marginBottom: 20 }}>
            <Button block primary
              onPress={this.goSingup}
            >
              <Text>Sign Up</Text>
            </Button>
          </View>
          <H3 style={styles.text}>OR</H3>
          <View style={{ marginBottom: 80 }}>
            <Button block info
              onPress={this.goLogin}
            >
              <Text>Log In</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>

    )
  }
};
