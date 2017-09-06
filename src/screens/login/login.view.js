// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Login
        </Text>
        <Button
          onPress={this._navigateToEnterLie}
          title="record a another lie"
          accessibilityLabel="record a another lie"
        />
      </View>
    );
  }
  _navigateToEnterLie = () => {
    this.props.navigator.resetTo({
      screen: 'view.lie',
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
