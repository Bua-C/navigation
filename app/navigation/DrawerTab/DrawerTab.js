import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeStack from '../HomeStack';
import AboutStack from '../AboutStack';
import ContackStack from '../ContackStack';
import {Text, TouchableOpacity} from 'react-native';

const DrawerTab = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        drawerLabel: 'Home',
      },
      // navigationOptions: ({navigation}) => ({
      //   drawerLabel: 'Homeder',
      //   drawerIcon: ({tintColor}) => (
      //     <TouchableOpacity onpress={() => navigation.closeDrawer()}>
      //       <Text>hide</Text>
      //     </TouchableOpacity>
      //   ),
      // }),
    },
    About: {
      screen: AboutStack,
      navigationOptions: {
        drawerLabel: 'About',
      },
    },
    Contack: {
      screen: ContackStack,
      navigationOptions: {
        drawerLabel: 'Contack',
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(DrawerTab);
