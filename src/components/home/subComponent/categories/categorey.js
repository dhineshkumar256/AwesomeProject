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
    List,
    ListItem,
    Card,
    View
} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';

export default class Categories extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            emptyText : true,
            dataArray : [],
            catloader : true
        };
        this.createCategories = this.createCategories.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.updateCat(nextProps);
    }

    updateCat(nextProps){
        if(nextProps.navigation.state.params != undefined){
            let tempArray = this.state.dataArray;
            tempArray.map(val => {
                if(val.CAT_ID == nextProps.navigation.state.params.catData.CAT_ID){
                    val.CAT_NAME = nextProps.navigation.state.params.catData.CAT_NAME;
                }
            });
            this.setState({ dataArray : tempArray });
        }
    }

    componentWillMount(){
        fetch('http://192.168.1.2/React/Native/AwesomeProject/src/server/getCategories.php',{
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
                    dataArray : responseJson,
                    emptyText : false,
                    catloader : false
                });
            }
        }.bind(this))
        .catch(function(error){
            this.setState({
                catloader : false
            });
            console.error(error);
        });
    }
    createCategories(data){
        if(data){
            this.props.navigation.navigate('createCategories',{
                editCatData : data
            });
        }else{
            this.props.navigation.navigate('createCategories');
        }
    }
    render(){
        const { navigation } = this.props;
        const catData = navigation.getParam("catData");

        if(catData) {
            //this.state.dataArray.push(catData);
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
                        <Title>Categories</Title>
                    </Body>
                    <Right />
                </Header>
                {   this.state.emptyText &&
                    <Content padder>
                        <Text>List of Categories is empty.</Text>
                        <Text>Click on the (+) button to create an item</Text>
                    </Content>
                }
                {   !this.state.emptyText &&
                    <Content padder>
                        <Card>
                            <List style={{padding: 15, paddingLeft: 5}}
                                dataArray={this.state.dataArray}
                                renderRow={data =>
                                <ListItem avatar style={{padding: 5}} onPress={() => this.createCategories(data)}>
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
                                            <Text style={{fontSize: 30}}>{data.CAT_NAME.charAt(0).toUpperCase()}</Text>
                                        </View>
                                    </Left>
                                    <Body>
                                        <Text>{data.CAT_NAME}</Text>
                                    </Body>
                                </ListItem>}
                            />
                        </Card>
                    </Content>
                }
                <Fab
                    position="bottomRight"
                    style={{ backgroundColor: '#ff7e00' }}
                    onPress={() => this.createCategories()}
                >
                    <Icon name="md-add" />
                </Fab>
                <Spinner visible={this.state.catloader} textContent={"Loading..."} animation={"fade"} textStyle={{color: '#FFF'}} />
            </Container>
        )
    }
}
