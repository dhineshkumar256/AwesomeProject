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
                    <Title>Items</Title>
                </Body>
                <Right/>
            </Header>
            <Content>
                <Card style={{marginLeft:15, marginRight:15}}>
                    <List style={{padding: 15}}>
                        <ListItem icon>
                            <Left><Icon name="list"></Icon></Left>
                            <Body><Text>Items</Text></Body>
                        </ListItem>
                        <ListItem icon>
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
