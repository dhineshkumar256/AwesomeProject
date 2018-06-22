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

const dataArray = [];

export default class Categories extends React.Component{
    constructor(props){
        super(props);
        this.createCategories = this.createCategories.bind(this);
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
            dataArray = catData;
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
                {   dataArray.length <= 0 &&
                    <Content padder>
                        <Text>List of Categories is empty.</Text>
                        <Text>Click on the (+) button to create an item</Text>
                    </Content>
                }
                {   dataArray.length > 0 &&
                    <Content padder>
                        <Card>
                            <List style={{padding: 15, paddingLeft: 5}}
                                dataArray={dataArray}
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
                                            <Text style={{fontSize: 30}}>{data.categoreyName.charAt(0).toUpperCase()}</Text>
                                        </View>
                                    </Left>
                                    <Body>
                                        <Text>{data.categoreyName}</Text>
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
