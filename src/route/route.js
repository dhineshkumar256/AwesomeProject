import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Splashscreen from '../components/splashscreen/Splashscreen';
import Login from '../components/login/login';
import Signup from '../components/signup/signup';
import Home from '../components/home/home';
import TableDetails from '../components/home/subComponent/tabledetails';

const RootStack = createStackNavigator(
  {
    Splashscreen : Splashscreen,
    Login : Login,
    Signup : Signup,
    Home : Home,
    TableDetails : TableDetails
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
