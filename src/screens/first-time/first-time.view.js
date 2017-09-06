// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

export default class FirstTimeLaunch extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          First time app launch
        </Text>
        <Text>
          First time user
        </Text>
        <Text>
          Create your password
        </Text>
        <Button
          onPress={this._navigateToTour}
          title="create your password"
          accessibilityLabel="create your password"
        />
        <Button
          onPress={this._navigateToEnterLie}
          title="record a lie"
          accessibilityLabel="create your password"
        />
      </View>
    );
  }
  _navigateToTour = () => {
    this.props.navigator.resetTo({
      screen: 'view.tour',
      title: 'Getting started',
      passProps: {},
      animated: true,
      animationType: 'fade',
    });
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
