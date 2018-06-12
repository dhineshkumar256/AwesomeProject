import React from 'react';
import { Text } from 'native-base';
import { View } from 'react-native';
import { createDrawerNavigator, DrawerView } from 'react-navigation';
import OrderScreen from './subComponent/order';
import ItemScreen from './subComponent/items';
import StaffScreen from './subComponent/staff';
import UserSettingsScreen from './subComponent/usersetting';
import SettingsScreen from './subComponent/settings';
import SideBar from '../sidebar';

const DrawerNav = createDrawerNavigator(
    {
        Order       : { screen: OrderScreen },
        Item        : { screen: ItemScreen },
        Staff       : { screen: StaffScreen },
        UserSettings: { screen: UserSettingsScreen },
        Settings    : { screen: SettingsScreen}
    },
    {
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <SideBar {...props} />
    }
);

export default DrawerNav;
