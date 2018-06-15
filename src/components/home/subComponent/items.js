import React from 'react';
import {
    Container,
    Header,
    Left,
    Icon,
    Button,
    Body,
    Title,
    Right,
    Content,
    Card,
    List,
    ListItem,
    Text
} from 'native-base';

export default class ItemScreen extends React.Component {

  constructor(props) {
    super(props);
    this.fnopenDrawer = this.fnopenDrawer.bind(this);
    this.getItems = this.getItems.bind(this);
    this.getCategories = this.getCategories.bind(this);
  }

  fnopenDrawer() {
      this.props.navigation.openDrawer();
  }
  getItems() {
      this.props.navigation.navigate('createItem');
  }
  getCategories() {
      this.props.navigation.navigate('createCategories');
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
                    <Title>Items</Title>
                </Body>
                <Right/>
            </Header>
            <Content padder>
                <Card>
                    <List style={{padding: 15}}>
                        <ListItem icon onPress={() => this.getItems()}>
                            <Left><Icon name="list"></Icon></Left>
                            <Body><Text>Items</Text></Body>
                        </ListItem>
                        <ListItem icon onPress={() => this.getCategories()}>
                            <Left><Icon name="md-apps"></Icon></Left>
                            <Body><Text>Categories</Text></Body>
                        </ListItem>
                    </List>
                </Card>
            </Content>
        </Container>
    )
  }
}
