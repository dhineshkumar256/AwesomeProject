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
    Card,
    CardItem,
    Item,
    Input,
    Label,
    Picker
} from 'native-base';
import ToastService from "../../../custom/toastservice";

const listArray = [];

export default class createItem extends React.Component{
    constructor(props){
        super(props);
        this.saveItems = this.saveItems.bind(this);
        this.state = {
            itemName : '',
            itemCategory : "0",
            itemPrice : '',
        }
    }

    componentDidMount() {
        const { navigation } = this.props;
        const listData = navigation.getParam('editItemData');
        if(listData){
            this.setState({
                itemName : listData.name,
                itemCategory : listData.category,
                itemPrice : listData.price
            });
        }
    }

    onCatValueChange(value: string) {
        this.setState({
          itemCategory: value
        });
    }
    saveItems() {
        if(this.state.itemName != '') {
            listArray.push(
                {
                    name : this.state.itemName,
                    category : this.state.itemCategory,
                    price : this.state.itemPrice
                }
            );
            this.props.navigation.navigate('Items',{
                listData : listArray
            });
        }else{
            ToastService("warning", "Item Name can not be empty");
        }
    }


    render() {
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="md-close" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Create Items</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.saveItems()}>
                            <Icon name="md-checkmark" />
                        </Button>
                    </Right>
                </Header>
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
            </Container>
        )
    }
}
