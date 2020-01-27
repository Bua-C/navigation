import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import home from '../components/home/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {Title} from 'react-native-paper';

const HomeStack = createStackNavigator({
  Home: home,
});

export default createAppContainer(HomeStack);
