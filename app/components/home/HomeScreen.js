import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class HomeScreen extends Component {
  /*** OPEN DRAWER ***/
  _toggleDrawer = () => {
    this.props.navigation.toggleDrawer();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <TouchableOpacity
          onPress={this._toggleDrawer}
          style={{backgroundColor: 'blue', padding: 10, width: '90%'}}>
          <Text style={{textAlign: 'center', color: 'white'}}>Click me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
