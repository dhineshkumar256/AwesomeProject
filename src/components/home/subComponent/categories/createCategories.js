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
    Card,
    CardItem,
    Item,
    Input
} from 'native-base';
import ToastService from "../../../custom/toastservice";

const catdataArray = [];

export default class createCategories extends React.Component{
    constructor(props){
        super(props);
        this.saveCategorey = this.saveCategorey.bind(this);
        this.state = {
            CAT_NAME : '',
            CAT_ID : '',
            editFlag : false
        }
    }

    componentDidMount() {
        const { navigation } = this.props;
        const editCatData = navigation.getParam('editCatData');
        if(editCatData){
            this.setState({
                CAT_NAME : editCatData.CAT_NAME,
                CAT_ID : editCatData.CAT_ID,
                editFlag : true
            });
        }
    }

    saveCategorey() {
        if(!this.state.editFlag){
            if(this.state.CAT_NAME != '') {
                fetch('http://192.168.1.2/React/Native/AwesomeProject/src/server/createCategories.php',{
                    method : "POST",
                    header : {
                        'Accept' : 'application/json',
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify({
                        REST_ID : global.REST_ID,
                        CAT_NAME : this.state.CAT_NAME
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
                        this.props.navigation.navigate('Categories', {
                            catData : {CAT_NAME : this.state.CAT_NAME}
                        });
                    }
                }.bind(this))
                .catch(function(error){
                    console.error(error);
                })
            }else{
                ToastService("Category Name Cannot be empty");
            }
        }else{
            if(this.state.CAT_NAME != '') {
                fetch('http://192.168.1.2/React/Native/AwesomeProject/src/server/editCategories.php',{
                    method : "POST",
                    header : {
                        'Accept' : 'application/json',
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify({
                        CAT_ID : this.state.CAT_ID,
                        CAT_NAME : this.state.CAT_NAME
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
                        this.props.navigation.navigate('Categories',{
                            catData : {
                                CAT_NAME : this.state.CAT_NAME,
                                CAT_ID : this.state.CAT_ID
                            }
                        });
                    }
                }.bind(this))
                .catch(function(error){
                    console.error(error);
                })
            }else{
                ToastService("Category Name Cannot be empty");
            }
        }
    }

    render() {
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent
                            onPress={() => this.props.navigation.goBack()}>
                            <Icon name='md-close' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Create Categories</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.saveCategorey()}>
                            <Icon name="md-checkmark" />
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    <Card>
                        <CardItem header bordered>
                            <Text>Categorey Description</Text>
                        </CardItem>
                        <CardItem>
                            <Grid>
                                <Col style={{width: "30%", alignSelf:"center"}}>
                                    <Text>Categorey Name</Text>
                                </Col>
                                <Col>
                                    <Item>
                                        <Input
                                            onChangeText={(CAT_NAME) => this.setState({CAT_NAME})}
                                            value={this.state.CAT_NAME}
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
