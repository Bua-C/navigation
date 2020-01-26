import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import contack from '../components/contack/ContackScreen';

const ContackStack = createStackNavigator({
  Contack: contack,
});

export default createAppContainer(ContackStack);
