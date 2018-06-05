import React from 'react';
import { Text } from 'native-base';
import { View } from 'react-native';
import { createDrawerNavigator, DrawerView } from 'react-navigation';
import MenuScreen from './subComponent/menu';
import StaffScreen from './subComponent/staff';
import TableScreen from './subComponent/table';

const DrawerNav = createDrawerNavigator({
  Menu: {
    screen: MenuScreen
  },
  Staff: {
    screen: StaffScreen
  },
  Table: {
    screen: TableScreen
  }
});

export default DrawerNav;
