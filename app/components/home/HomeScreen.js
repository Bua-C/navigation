import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>

        {/* <TouchableOpacity
          onPress={() => this.props.navigation.openDrawer()}
          style={{padding: 10, marginTop: 10, backgroundColor: 'red'}}>
          <Text style={{color: 'white'}}>Show Drawer</Text>
        </TouchableOpacity> */}
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
