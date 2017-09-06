// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

export default class Reason extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Reason
        </Text>
        <Button
          onPress={() => {}}
          title="save lie"
          accessibilityLabel="save lie"
        />
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
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
