// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

export default class RecordLie extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Record a lie
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
