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
    Text
} from 'native-base';

export default class createCategories extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
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
                    <Right/>
                </Header>
                <Content>
                    <Text>Lets Create Categories!!</Text>
                </Content>
            </Container>
        )
    }
}
