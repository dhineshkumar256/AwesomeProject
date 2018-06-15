import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Splashscreen from '../components/splashscreen/Splashscreen';
import Login from '../components/login/login';
import Signup from '../components/signup/signup';
import Home from '../components/home/home';
import createCategories from '../components/home/subComponent/createCategories';
import createItem from '../components/home/subComponent/createItem';

const RootStack = createStackNavigator(
  {
    Splashscreen : Splashscreen,
    Login : Login,
    Signup : Signup,
    Home : Home,
    createCategories : createCategories,
    createItem : createItem
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
