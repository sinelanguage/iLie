// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

export default class Tour extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Take tour
        </Text>
        <Button
          onPress={this._navigateToLogin}
          title="login"
          accessibilityLabel="login"
        />
      </View>
    );
  }

  _navigateToLogin = () => {
    this.props.navigator.resetTo({
      screen: 'view.login',
      title: 'Login',
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
