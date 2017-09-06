// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

export default class Two extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          First time app launch
          First time user
          Create your password
        </Text>
        <Button
          onPress={this._toOne}
          title="create your password"
          color="#841584"
          accessibilityLabel="create your password"
        />
      </View>
    );
  }
  _toOne = () => {
    this.props.navigator.resetTo({
      screen: 'example.One',
      passProps: {},
      animated: true,
      animationType: 'fade',
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
