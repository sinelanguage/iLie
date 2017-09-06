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
          onPress={this._navigateToEnterLie}
          title="record a lie"
          accessibilityLabel="create your password"
        />
      </View>
    );
  }
  _navigateToEnterLie = () => {
    this.props.navigator.resetTo({
      screen: 'view.lie',
      title: 'I lied',
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
