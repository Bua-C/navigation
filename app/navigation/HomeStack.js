import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import home from '../components/home/HomeScreen';

const HomeStack = createStackNavigator({
  Home: home,
});

export default createAppContainer(HomeStack);
