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

export default class Categories extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            emptyText : true,
            dataArray : []
        };
        this.createCategories = this.createCategories.bind(this);
    }
    componentWillMount(){
        fetch('http://192.168.1.6/React/Native/AwesomeProject/src/server/getCategories.php',{
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
                this.setState({dataArray : responseJson});
                this.setState({emptyText : false});
            }
        }.bind(this))
        .catch(function(error){
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
            console.log(catData);
            this.state.dataArray.push(catData);
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
            </Container>
        )
    }
}
