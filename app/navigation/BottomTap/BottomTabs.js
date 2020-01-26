import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import {Icon} from 'native-base';

import HomeStack from '../HomeStack';
import AboutStack from '../AboutStack';
import ContackStack from '../ContackStack';

const BottomTap = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        title: 'title',
        tabBarBadge: '2',
        tabBarIcon: <Icon type="Ionicons" name="ios-menu" />,
      },
    },
    About: AboutStack,
    Contack: ContackStack,
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: {backgroundColor: '#694fad'},
  },
);

export default createAppContainer(BottomTap);
