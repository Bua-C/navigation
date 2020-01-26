import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class ContackScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ContackScreen</Text>
      </View>
    );
  }
}
export default ContackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
