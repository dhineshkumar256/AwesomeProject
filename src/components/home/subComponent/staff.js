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
    Thumbnail
} from 'native-base';
import ToastService from "../../custom/toastservice";

const uri = require("../../../assets/images/man.png");

export default class StaffScreen extends React.Component {

  constructor(props) {
    super(props);
    this.fnopenDrawer = this.fnopenDrawer.bind(this);
    this.editStaff = this.editStaff.bind(this);
    this.state = {
        staffData : []
    }
  }

  componentWillMount(){
      fetch('http://192.168.1.6/React/Native/AwesomeProject/src/server/getstaff.php',{
          method : 'POST',
          header : {
              'Accept' : 'application/json',
              'Content-type' : 'application/json'
          },
          body : JSON.stringify({
              REST_ID : global.REST_ID
          })
      })
      .then(function(response){
          if(!response.ok){
              throw Error(response.statusText);
          }
          return response.json();
      })
      .then(function(responseJson){
          if(responseJson.length > 0){
              this.setState({
                  staffData : responseJson
              });
          }
      }.bind(this))
      .catch(function(error){
          console.error(error);
      })
  }

  fnopenDrawer() {
      this.props.navigation.openDrawer();
  }

  editStaff(data) {
      if(data){
          this.props.navigation.navigate('AddStaffScreen',{
              staffData : data
          });
      }else{
          ToastService("warning", "Something Went Wrong!!");
      }
  }

  render() {
     return(
        <Container>
            <Header>
                <Left>
                    <Button transparent
                        onPress={this.fnopenDrawer}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Staff</Title>
                </Body>
                <Right/>
            </Header>
            <Content padder>
                {
                    this.state.staffData.map((item,index) => {
                        return (
                            <Card key={index}>
                                <CardItem bordered>
                                        <Thumbnail source={uri} />
                                    <Body>
                                        <Text>{item.STAFF_FNAME} {item.STAFF_LNAME}</Text>
                                        <Text>{item.STAFF_EMAIL}</Text>
                                        <Text>{item.STAFF_PHONE}</Text>
                                    </Body>
                                    <Right>
                                        <Button transparent primary onPress={() => this.editStaff(item)}>
                                            <Icon name="md-create"></Icon>
                                        </Button>
                                    </Right>
                                </CardItem>
                            </Card>
                        )
                    })
                }
            </Content>
        </Container>
    )
  }
}
