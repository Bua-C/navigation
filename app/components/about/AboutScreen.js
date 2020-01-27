import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>AboutScreen</Text>
        {/* <TouchableOpacity
          onPress={() => this.props.navigation.openDrawer()}
          style={{padding: 10, marginTop: 10, backgroundColor: 'red'}}>
          <Text style={{color: 'white'}}>Show Drawer</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}
export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
