const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Translator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return(
        <TextInput
          style={{height:40, width: 100}}
          placeholder="type here"
          OnChangeText={(text) => this.setState(text)}
        />
    )
  }
}

class Greetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show : true}

    // setInterval(() => {
    //     this.setState(previousState => {
    //       return {show: !previousState.show }
    //     });
    // },1000);
  }


  render(){
    let disply = this.state.show ? this.props.name : ' ';
    return (
      <Text>{disply}</Text>
    );
  }
}






export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.testnav = this.testnav.bind(this);
  }
  testnav() {
    this.props.navigation.navigate('Login');
  }
  render() {
    //const { navigation } = this.props;
    const username = this.props.navigation.getParam('username');
    const password = this.props.navigation.getParam('password');

    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
         <FlatList
           data={[
             {key: 'ORDER'},
             {key: 'TABLES'},
             {key: 'MENU'},
             {key: 'STAFF'},
             {key: 'REPORTS'},
             {key: 'PRINTING'},
             {key: 'RESTARUNT'},
             {key: 'ACCOUNT'},
           ]}
           renderItem={({item}) => <Text onPress={this.testnav}>{item.key}</Text>}
         />
      </View>
    );

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome {username}</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
          </View>
      </DrawerLayoutAndroid>
    )
  }
}





<View style={style.loginForm}>
  <Text>Login</Text>
  <TextInput
    style={style.mrgn10, style.wdt100}
    placeholder="Username"
    onChangeText={(username) => this.setState({username})}
    value={this.state.username}
  />
  <TextInput
    style={style.mrgn10, style.wdt100}
    placeholder="Password"
    onChangeText={(password) => this.setState({password})}
    value={this.state.password}
  />
  <Button
    onPress={this.happylogin}
    title="Login"
    color="#841584"
    style={style.mrgn10, style.wdt100}
  />
</View>






<Grid>
  <Row size={1} />
  <Row size={4} />
  <Row size={2}>
    <Container>
      <Content padder style={{ padding: 20 }}>
        <Button block info
          onPress={this.goLogin}
          style={{marginBottom: 20}}>
          <Text style={{ color: "#FFF"}}>LOGIN</Text>
        </Button>
        <Button block primary
          onPress={this.goSingup}
          style={{marginBottom: 20}}>
          <Text style={{ color: "#FFF"}}>SINGUP</Text>
        </Button>
      </Content>
    </Container>
  </Row>
</Grid>

<View style={styles.logoContainer}>
  <ImageBackground source={launchscreenLogo} style={styles.logo} />
</View>


<Content>
  <Card>
    <CardItem>
      <Icon active name="md-restaurant" />
      <Text>Menus</Text>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
     </CardItem>
   </Card>
</Content>


render() {
  return(
    if (this.state.loading) {
      <Container style={{marginTop: 24}}>
        <RootStack />
      </Container>
    }
  )
}

<Content>
  <Card>
    <CardItem>
        <List>
          <ListItem itemHeader first>
            <Button transparent onPress={this.addNewcategory}>
              <Text>Add new category</Text>
            </Button>
          </ListItem>
          <ListItem>
            <Text>MAIN</Text>
          </ListItem>
        </List>
     </CardItem>
   </Card>
</Content>


<List
            renderRow={data =>
              <ListItem>
                <Text> {data} </Text>
              </ListItem>}
            renderLeftHiddenRow={data =>
              <Button full onPress={() => alert(data)}>
                <Icon active name="information-circle" />
              </Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
            leftOpenValue={75}
            rightOpenValue={-75}
          />



















          import React, { Component } from 'react';
          import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
          import Modal from 'react-native-modal'; // 2.4.0


          export default class Example extends Component {
            state = {
              visibleModal: null,
            };

            _renderButton = (text, onPress) => (
              <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                  <Text>{text}</Text>
                </View>
              </TouchableOpacity>
            );

            _renderModalContent = () => (
              <View style={styles.modalContent}>
                <Text>Hello!</Text>
                {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
              </View>
            );

            render() {
              return (
                <View style={styles.container}>
                  {this._renderButton('Default modal', () => this.setState({ visibleModal: 1 }))}
                  {this._renderButton('Sliding from the sides', () => this.setState({ visibleModal: 2 }))}
                  {this._renderButton('A slower modal', () => this.setState({ visibleModal: 3 }))}
                  {this._renderButton('Fancy modal!', () => this.setState({ visibleModal: 4 }))}
                  {this._renderButton('Bottom half modal', () => this.setState({ visibleModal: 5 }))}
                  <Modal isVisible={this.state.visibleModal === 1}>
                    {this._renderModalContent()}
                  </Modal>
                  <Modal
                    isVisible={this.state.visibleModal === 2}
                    animationIn={'slideInLeft'}
                    animationOut={'slideOutRight'}
                  >
                    {this._renderModalContent()}
                  </Modal>
                  <Modal
                    isVisible={this.state.visibleModal === 3}
                    animationInTiming={2000}
                    animationOutTiming={2000}
                    backdropTransitionInTiming={2000}
                    backdropTransitionOutTiming={2000}
                  >
                    {this._renderModalContent()}
                  </Modal>
                  <Modal
                    isVisible={this.state.visibleModal === 4}
                    backdropColor={'red'}
                    backdropOpacity={1}
                    animationIn={'zoomInDown'}
                    animationOut={'zoomOutUp'}
                    animationInTiming={1000}
                    animationOutTiming={1000}
                    backdropTransitionInTiming={1000}
                    backdropTransitionOutTiming={1000}
                  >
                    {this._renderModalContent()}
                  </Modal>
                  <Modal isVisible={this.state.visibleModal === 5} style={styles.bottomModal}>
                    {this._renderModalContent()}
                  </Modal>
                </View>
              );
            }
          }

          const styles = StyleSheet.create({
            container: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            },
            button: {
              backgroundColor: 'lightblue',
              padding: 12,
              margin: 16,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              borderColor: 'rgba(0, 0, 0, 0.1)',
            },
            modalContent: {
              backgroundColor: 'white',
              padding: 22,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              borderColor: 'rgba(0, 0, 0, 0.1)',
            },
            bottomModal: {
              justifyContent: 'flex-end',
              margin: 0,
            },
          });




          import React from 'react';
          import { createStackNavigator, createDrawerNavigator } from "react-navigation";
          import Splashscreen from '../components/splashscreen/Splashscreen';
          import Login from '../components/login/login';
          import Signup from '../components/signup/signup';
          import Home from '../components/home/home';
          import TableDetails from '../components/home/subComponent/tabledetails';
          import SideBar from '../components/sidebar';

          const Drawer = createDrawerNavigator(
              {
                  Splashscreen : { screen : Splashscreen },
                  Login : { screen : Login},
                  Signup : { screen : Signup},
                  Home : { screen : Home }
              },
              {
                  initialRouteName: "Splashscreen",
                  contentOptions: {
                      activeTintColor: "#e91e63"
                  },
                  contentComponent: props => <SideBar {...props} />
              }
          );
          const AppNavigator = createStackNavigator({
              Drawer: { screen: Drawer }
          });

          export default AppNavigator;













          {data.types &&
            <Right style={{ flex: 1 }}>
              <Badge
                style={{
                  borderRadius: 3,
                  height: 25,
                  width: 72,
                  backgroundColor: data.bg
                }}
              >
                <Text
                  style={styles.badgeText}
                >{`${data.types} Types`}</Text>
              </Badge>
            </Right>}
