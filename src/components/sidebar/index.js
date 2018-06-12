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
  Badge
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
    icon: "md-settings",
    bg: "#DA4437",
  },
  {
    name: "Settings",
    route: "Settings",
    icon: "md-man",
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
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />

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
