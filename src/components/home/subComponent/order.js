import React from 'react';
import {
    Container,
    Header,
    Left,
    Button,
    Icon,
    Body,
    Right,
    Title,
    Content,
    Text,
    Card,
    List,
    ListItem,
    View,
    CardItem
} from 'native-base';

export default class OrderScreen extends React.Component {
  constructor(props) {
    super(props);
    this.fnopenDrawer = this.fnopenDrawer.bind(this);
    this.addItem = this.addItem.bind(this);
    this.goAddStaffScreen = this.goAddStaffScreen.bind(this);
    this.state = {
        dataArray : [],
        addPrice : 0.00
    }
  }

  componentWillMount(){
      fetch('http://192.168.1.6/React/Native/AwesomeProject/src/server/getItems.php',{
          method : 'POST',
          headers : {
              'Accept' : 'application/json',
              'Content-Type' : 'application/json'
          },
          body : JSON.stringify({
              REST_ID : global.REST_ID,
          })
      })
      .then(function(response){
          if (!response.ok) {
              throw Error(response.statusText);
          }
          return response.json();
      })
      .then(function(responseJson){
          if(responseJson.length > 0){
              this.setState({
                  dataArray : responseJson
              });
          }else{
              // else content
          }
      }.bind(this))
      .catch(function(error){
          console.error(error);
      });
  }

  addItem(data){
      let tempPrice = data.ITEM_PRICE;
      this.setState({
          addPrice : this.state.addPrice + parseInt(tempPrice)
      })
  }

  goAddStaffScreen() {
      this.props.navigation.navigate('AddStaffScreen');
  }

  fnopenDrawer() {
      this.props.navigation.openDrawer();
  }

  render() {
      return(
        <Container>
            <Header>
                <Left>
                    <Button transparent
                        onPress={this.fnopenDrawer}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Ticket</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='search' />
                    </Button>
                    <Button transparent onPress={() => this.goAddStaffScreen()}>
                        <Icon name='md-person-add' />
                    </Button>
                    <Button transparent>
                        <Icon name='more' />
                    </Button>
                </Right>
            </Header>
            <Content padder>
                <Button block primary>
                    <Text>Charge {this.state.addPrice}</Text>
                </Button>
                <Card>
                    <CardItem header>
                        <Text>All</Text>
                    </CardItem>
                    <List style={{padding: 15, paddingLeft: 5}}
                        dataArray={this.state.dataArray}
                        renderRow={data =>
                        <ListItem avatar style={{padding: 5}} onPress={() => this.addItem(data)}>
                            <Left>
                                <View style={{
                                    borderWidth:1,
                                    borderColor:'rgba(0,0,0,0.2)',
                                    alignItems:'center',
                                    justifyContent:'center',
                                    width:70,
                                    height:70,
                                    backgroundColor:'#fff',
                                    borderRadius:100,
                                }}>
                                    <Text style={{fontSize: 30}}>{data.ITEM_NAME.charAt(0).toUpperCase()}</Text>
                                </View>
                            </Left>
                            <Body>
                                <Text>{data.ITEM_NAME}</Text>
                            </Body>
                            <Right>
                                <Text>{data.ITEM_PRICE}</Text>
                            </Right>
                        </ListItem>}
                    />
                </Card>
            </Content>
        </Container>
    )
  }
}
