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
    Card,
    CardItem,
    Form,
    Item,
    Input,
    Label
} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import ToastService from "../../custom/toastservice";

export default class AddStaffScreen extends React.Component {

  constructor(props) {
    super(props);
    this.addStaff = this.addStaff.bind(this);

    this.state = {
        fname    : '',
        lname    : '',
        email    : '',
        password : '',
        number   : '',
        editFlag : false
    }
  }

  componentDidMount(){
        const { navigation } = this.props;
        const editStaffData = navigation.getParam('staffData');

        if(editStaffData){
            this.setState({
                fname : editStaffData.STAFF_FNAME,
                lname : editStaffData.STAFF_LNAME,
                email : editStaffData.STAFF_EMAIL,
                password : editStaffData.STAFF_PASSWORD,
                number : editStaffData.STAFF_PHONE,
                editFlag : true
            });
        }

  }

  addStaff(){
      fetch('http://192.168.1.6/React/Native/AwesomeProject/src/server/addstaff.php',{
          method : 'POST',
          headers : {
              'Accept' : 'application/json',
              'Content-Type' : 'application/json'
          },
          body : JSON.stringify({
              REST_ID : global.REST_ID,
              STAFF_FNAME : this.state.fname,
              STAFF_LNAME : this.state.lname,
              STAFF_EMAIL : this.state.email,
              STAFF_PASSWORD : this.state.password,
              STAFF_PHONE : this.state.number
          })
      })
      .then(function(response){
          if(!response.ok) {
              throw Error(response.statusText);
          }
          return response.json();
      })
      .then(function(responseJson){
          if(responseJson.data){
              ToastService("success", responseJson.data);
              this.props.navigation.goBack();
          }else{

          }
      }.bind(this))
      .catch(function(error){
          console.error(error);
      })
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
                    <Title>Add Staff</Title>
                </Body>
                <Right>
                    <Button transparent
                        onPress={() => this.addStaff()}>
                        <Icon name='md-checkmark' />
                    </Button>
                </Right>
            </Header>
            <Content padder>
                <Card>
                    <CardItem header bordered>
                        <Text>A link to the HappyWaiter app will be sent to the specified email.</Text>
                    </CardItem>
                    <Form>
                        <Item stackedLabel>
                            <Label>First Name</Label>
                            <Input
                                onChangeText={(fname) => this.setState({fname})}
                                value={this.state.fname}
                                editable = {!this.state.editFlag}
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>Last Name</Label>
                            <Input
                                onChangeText={(lname) => this.setState({lname})}
                                value={this.state.lname}
                                editable = {!this.state.editFlag}
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>Email</Label>
                            <Input
                                onChangeText={(email) => this.setState({email})}
                                value={this.state.email}
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>Password</Label>
                            <Input
                                onChangeText={(password) => this.setState({password})}
                                value={this.state.password}
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>Number</Label>
                            <Input
                                onChangeText={(number) => this.setState({number})}
                                value={this.state.number}
                            />
                        </Item>
                    </Form>
                </Card>
            </Content>
        </Container>
    )
  }
}
