import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Splashscreen from '../components/splashscreen/Splashscreen';
import Login from '../components/login/login';
import Signup from '../components/signup/signup';
import Home from '../components/home/home';
import Categories from '../components/home/subComponent/categories/categorey';
import createCategories from '../components/home/subComponent/categories/createCategories';
import Items from '../components/home/subComponent/items/items';
import createItem from '../components/home/subComponent/items/createItem';
import AddStaffScreen from '../components/home/subComponent/addstaff';

const RootStack = createStackNavigator(
  {
    Splashscreen : Splashscreen,
    Login : Login,
    Signup : Signup,
    Home : Home,
    createCategories : createCategories,
    Items : Items,
    createItem : createItem,
    Categories : Categories,
    AddStaffScreen : AddStaffScreen
  },
  {
    initialRouteName : 'Splashscreen',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: true,
    }
  }
);

export default RootStack;
