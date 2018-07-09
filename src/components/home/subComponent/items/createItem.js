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
const catDropDownArray = [];

export default class createItem extends React.Component{
    constructor(props){
        super(props);
        this.saveItems = this.saveItems.bind(this);
        this.loadDropDown = this.loadDropDown.bind(this);
        this.state = {
            ITEM_NAME : '',
            CAT_ID : "",
            ITEM_PRICE : '',
            dropdownData : []
        }
    }

    componentDidMount() {
        const { navigation } = this.props;
        const listData = navigation.getParam('editItemData');
        console.log(listData);
        if(listData){
            this.setState({
                ITEM_NAME : listData.ITEM_NAME,
                CAT_ID : listData.CAT_ID,
                ITEM_PRICE : listData.ITEM_PRICE
            });
        }
    }

    componentWillMount(){
        fetch('http://192.168.1.3/React/Native/AwesomeProject/src/server/getCategories.php',{
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
                    dropdownData : responseJson
                });
            }
        }.bind(this))
        .catch(function(error){
            console.error(error);
        });
    }

    loadDropDown() {
        return this.state.dropdownData.map(data => (
            <Picker.Item key={data.CAT_ID} label={data.CAT_NAME} value={data.CAT_ID} />
        ))
    }

    onCatValueChange(value: string) {
        this.setState({
          CAT_ID: value
        });
    }
    saveItems() {
        console.log(this.state.CAT_ID);
        if(this.state.ITEM_NAME != '' && this.state.CAT_ID != 'Select Category') {
            fetch('http://192.168.1.3/React/Native/AwesomeProject/src/server/createItems.php',{
                method : "POST",
                header : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    CAT_ID : this.state.CAT_ID,
                    ITEM_NAME : this.state.ITEM_NAME,
                    ITEM_PRICE : this.state.ITEM_PRICE
                })
            })
            .then(function(response){
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(function(responseJson){
                if(responseJson){
                    this.props.navigation.navigate('Items',{
                        listData : {
                                ITEM_NAME : this.state.ITEM_NAME,
                                CAT_ID : this.state.CAT_ID,
                                ITEM_PRICE : this.state.ITEM_PRICE
                            }
                    });
                }
            }.bind(this))
            .catch(function(error){
                console.error(error);
            });
        }else{
            ToastService("warning", "Fields can not be empty");
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
                                            onChangeText={(ITEM_NAME) => this.setState({ITEM_NAME})}
                                            value={this.state.ITEM_NAME}
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
                                          selectedValue={this.state.CAT_ID}
                                          onValueChange={this.onCatValueChange.bind(this)}
                                        >
                                            <Picker.Item label="Select Category" value="Select Category" />
                                            {this.loadDropDown()}
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
                                            onChangeText={(ITEM_PRICE) => this.setState({ITEM_PRICE})}
                                            value={this.state.ITEM_PRICE}
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
