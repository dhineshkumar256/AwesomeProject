import React from 'react';
import { ListView } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card, CardItem,
  Text,
  Icon,
  Right, Left,
  Title,
  Button,
  Body,
  List, ListItem, H3, ActionSheet } from 'native-base';
const datas = [
  'Chicken Biriyani',
  'Mutton Biriyani',
  'Prawn Biriyani',
  'White Rice',
  'Aalu Parotta'
];
var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];

export default class MenuScreen extends React.Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
    };
    this.fnopenDrawer = this.fnopenDrawer.bind(this);
  }

  fnopenDrawer() {
    this.props.navigation.openDrawer()
  }

  addNewcategory() {

  }
  static navigationOptions = {
    drawerLabel: 'Menu',
    drawerIcon: <Icon name='md-restaurant' />
  };

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container>
      <Header>
        <Left>
          <Button transparent
            onPress={this.fnopenDrawer}>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>MENU</Title>
        </Body>
        <Right />
      </Header>
        <Content>
          <Card>
            <CardItem>
              <Button iconLeft block transparent onPress={this.addNewcategory}>
                <Icon name='md-add' />
                <Text>Add new category</Text>
              </Button>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <H3>Main</H3>
            </CardItem>
            <CardItem>
              <List
                dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                renderRow={
                  data =>
                    <ListItem>
                      <Text>{data}</Text>
                    </ListItem>
                  }
                renderLeftHiddenRow={
                  data => <Button full primary onPress={
                              () => alert(data)}>
                                <Icon active name="md-create" />
                            </Button>
                }
                renderRightHiddenRow={
                  () => <Button full danger onPress={
                            data => alert(data)}>
                            <Icon active name="trash" />
                        </Button>
                }
              leftOpenValue={75}
              rightOpenValue={-75}
                />
             </CardItem>
           </Card>
        </Content>
      </Container>
    );
  }
}
