import React from 'react';
import { Grid, Col } from 'react-native-easy-grid';
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
    Fab,
    View,
    Card,
    CardItem,
    Form,
    Item,
    Input,
    Label,
    Picker,
    List,
    ListItem,
    Thumbnail
} from 'native-base';
import ToastService from "../../custom/toastservice";

const listArray = [];

export default class createItem extends React.Component{
    constructor(props){
        super(props);
        this.createList = this.createList.bind(this);
        this.saveItems = this.saveItems.bind(this);

        this.state = {
            itemName : '',
            itemCategory : "0",
            itemPrice : '',
            listItem : true,
            listArrayFlag : false
        }
    }

    onCatValueChange(value: string) {
        this.setState({
          itemCategory: value
        });
        console.log(value);
    }
    saveItems() {
        if(this.state.itemName != '') {
            listArray.push(
                {
                    name : this.state.itemName,
                    category : this.state.itemCategory,
                    price : this.state.itemPrice
                }
            )
            this.setState({listArrayFlag : true, listItem: true})
            console.log(listArray)
        }else{
            ToastService("warning", "Item Name can not be empty");
        }
    }
    createList() {
        this.setState({
            listItem : false,
        })
    }

    render() {
        return(
            <Container>
                <Header>
                    <Left>
                        { this.state.listItem &&
                            <Button transparent
                                onPress={() => this.props.navigation.goBack()}>
                                <Icon name='arrow-back' />
                            </Button>
                        }
                        { !this.state.listItem &&
                            <Button transparent onPress={() => this.setState({listItem: true})}>
                                <Icon name="md-close" />
                            </Button>
                        }
                    </Left>
                    <Body>
                        { this.state.listItem &&
                            <Title>Items</Title>
                        }
                        { !this.state.listItem &&
                            <Title>Create Items</Title>
                        }
                    </Body>
                    {this.state.listItem &&
                        <Right/>
                    }
                    { !this.state.listItem &&
                        <Right>
                            <Button transparent onPress={() => this.saveItems()}>
                                <Icon name="md-checkmark" />
                            </Button>
                        </Right>
                    }
                </Header>
                { this.state.listItem && !this.state.listArrayFlag &&
                    <Content padder>
                        <Text>List of Items is empty.</Text>
                        <Text>Click on the (+) button to create an item</Text>
                    </Content>
                }
                { this.state.listArrayFlag &&
                    <Content padder>
                        <List
                            dataArray={listArray}
                            renderRow={data =>
                            <ListItem thumbnail>
                                <Left>
                                    <Thumbnail square size={55} />
                                </Left>
                                <Body>
                                    <Text>{data.itemName}</Text>
                                </Body>
                                <Right>
                                    <Text>{data.itemPrice}</Text>
                                </Right>
                            </ListItem>}
                        />
                    </Content>
                }
                { !this.state.listItem &&
                    <Content padder>
                        <Card>
                            <CardItem header bordered>
                                <Text>Item Description</Text>
                            </CardItem>
                            <CardItem>
                                <Grid>
                                    <Col style={{width: "30%", alignSelf:"center"}}>
                                        <Text>Item Name</Text>
                                    </Col>
                                    <Col>
                                        <Item>
                                            <Input
                                                onChangeText={(itemName) => this.setState({itemName})}
                                                value={this.state.itemName}
                                            />
                                        </Item>
                                    </Col>
                                </Grid>
                            </CardItem>
                            <CardItem>
                                <Grid>
                                    <Col style={{width: "30%", alignSelf:"center"}}>
                                        <Text>Category</Text>
                                    </Col>
                                    <Col>
                                        <Item>
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
                                              selectedValue={this.state.itemCategory}
                                              onValueChange={this.onCatValueChange.bind(this)}
                                            >
                                                <Picker.Item label="Select Category" value="0" />
                                                <Picker.Item label="No Category available" value="1" />
                                            </Picker>
                                        </Item>
                                    </Col>
                                </Grid>
                            </CardItem>
                            <CardItem>
                                <Grid>
                                    <Col style={{width: "30%", alignSelf:"center"}}>
                                    <Text>Price</Text>
                                    </Col>
                                    <Col>
                                        <Item>
                                            <Input
                                                onChangeText={(itemPrice) => this.setState({itemPrice})}
                                                value={this.state.itemPrice}
                                            />
                                        </Item>
                                    </Col>
                                </Grid>
                            </CardItem>
                        </Card>
                    </Content>
                }
                { this.state.listItem &&
                    <View style={{flex:1}}>
                        <Fab
                            position="bottomRight"
                            style={{ backgroundColor: '#ff7e00' }}
                            onPress={() => this.createList()}
                        >
                            <Icon name="md-add" />
                        </Fab>
                    </View>
                }
            </Container>
        )
    }
}
