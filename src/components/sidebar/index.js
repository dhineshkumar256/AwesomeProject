import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Thumbnail,
  View
} from "native-base";
import styles from "./style";

const drawerCover = require("../../assets/images/drawer-cover.png");
//const drawerImage = require("../../assets/images/logo-kitchen-sink.png");
const datas = [
  {
    name: "Orders",
    route: "Order",
    icon: "md-basket",
    bg: "#C5F442"
  },
  {
    name: "Items",
    route: "Item",
    icon: "md-list",
    bg: "#477EEA",
  },
  {
    name: "Staff",
    route: "Staff",
    icon: "md-person",
    bg: "#DA4437",
  },
  {
    name: "User Settings",
    route: "UserSettings",
    icon: "md-build",
    bg: "#DA4437",
  },
  {
    name: "Settings",
    route: "Settings",
    icon: "md-settings",
    bg: "#DA4437",
    },
    {
        name: "Log Out",
        route: "login",
        icon: "md-log-out",
        bg: "#DA4437",
    }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    const { navigation } = this.props;
    const username = navigation.getParam("username");
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
            <View style={styles.drawerCover}>
                <Thumbnail large source={drawerCover} style={{margin:20}} />
                <Text style={styles.username}>{username}</Text>
            </View>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                <Right/>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
