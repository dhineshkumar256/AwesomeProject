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
    Fab,
    Card,
    CardItem,
    Form,
    Item,
    Input,
    Label,
    Picker,
    List,
    ListItem,
    Thumbnail,
    View
} from 'native-base';

const dataArray = [];

export default class Items extends React.Component{
    constructor(props) {
        super(props);
        this.createList = this.createList.bind(this);
        this.state = {
            islistEmpty : true
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
                dataArray = responseJson;
                this.setState({islistEmpty: false});
            }
        }.bind(this))
        .catch(function(error){
            console.error(error);
        });
    }

    createList(data) {
        if(data){
            this.props.navigation.navigate('createItem',{
                editItemData : data
            })
        }else{
            this.props.navigation.navigate('createItem');
        }
    }

    render() {
        const { navigation } = this.props;
        const listData = navigation.getParam("listData");
        if(listData) {
            dataArray.push(listData);
        }
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent
                            onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Items</Title>
                    </Body>
                    <Right/>
                </Header>
                {   this.state.islistEmpty &&
                    <Content padder>
                        <Text>List of Items is empty.</Text>
                        <Text>Click on the (+) button to create an item</Text>
                    </Content>
                }
                {   !this.state.islistEmpty &&
                    <Content padder>
                        <Card>
                            <List style={{padding: 15, paddingLeft: 5}}
                                dataArray={dataArray}
                                renderRow={data =>
                                <ListItem avatar style={{padding: 5}} onPress={() => this.createList(data)}>
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
                                        <Text numberOfLines={1} note>{data.CAT_ID}</Text>
                                    </Body>
                                    <Right>
                                        <Text>{data.ITEM_PRICE}</Text>
                                    </Right>
                                </ListItem>}
                            />
                        </Card>
                    </Content>
                }
                <Fab
                    position="bottomRight"
                    style={{ backgroundColor: '#ff7e00' }}
                    onPress={() => this.createList()}
                >
                    <Icon name="md-add" />
                </Fab>

            </Container>
        )
    }
}
