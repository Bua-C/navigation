import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import HomeStack from '../HomeStack';
import AboutStack from '../AboutStack';
import ContackStack from '../ContackStack';

const DrawerTab = createDrawerNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      drawerLabel: 'HomeStack',
    },
  },
  About: {
    screen: AboutStack,
    navigationOptions: {
      drawerLabel: 'AboutStack',
    },
  },
  Contack: {
    screen: ContackStack,
    navigationOptions: {
      drawerLabel: 'ContackStack',
    },
  },
});

export default createAppContainer(DrawerTab);
