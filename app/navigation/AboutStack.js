import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import about from '../components/about/AboutScreen';

const AboutStack = createStackNavigator({
  About: about,
});

export default createAppContainer(AboutStack);
