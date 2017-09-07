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
        <Button
          onPress={this._navigateToData}
          title="view data"
          accessibilityLabel="view data"
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
  _navigateToData = () => {
    this.props.navigator.resetTo({
      screen: 'view.data',
      title: 'Your Bullsh*t Data',
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
