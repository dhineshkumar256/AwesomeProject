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
591
