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
          onPress={this._navigateToReason}
          title="record a reason"
          accessibilityLabel="record a reason"
        />
      </View>
    );
  }
  _navigateToReason = () => {
    this.props.navigator.push({
      screen: 'view.reason',
      passProps: {},
      animated: true,
      backButtonHidden: true,
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
