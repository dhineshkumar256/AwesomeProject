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
            categoreyName : ''
        }
    }

    componentDidMount() {
        const { navigation } = this.props;
        const editCatData = navigation.getParam('editCatData');
        if(editCatData){
            this.setState({
                categoreyName : editCatData.categoreyName,
            });
        }
    }

    saveCategorey() {
        if(this.state.categoreyName != '') {
            catdataArray.push(
                {categoreyName : this.state.categoreyName}
            );
            this.props.navigation.navigate('Categories', {
                catData : catdataArray
            })
        }else{
            ToastService("Category Name Cannot be empty");
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
                                            onChangeText={(categoreyName) => this.setState({categoreyName})}
                                            value={this.state.categoreyName}
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
