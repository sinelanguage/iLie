// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';

import { GridLines } from './grid-lines.view';
import { GraphLine } from './graph-line.view';
import { HonestlyTracking } from './honestly-tracking.view';
import { ILieLogo } from './ilie-logo.view';

export default class FirstTimeLaunch extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };
  render() {
    const { height, width } = Dimensions.get('window');
    return (
      <View style={styles.container}>
        {/*<View style={[
          styles.nested
        ]}>
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
          onPress={this._navigateToLogin}
          title="login"
          accessibilityLabel="login"
        />
        </View>*/}
          <GridLines />
          <GraphLine />
          <HonestlyTracking />
          <ILieLogo />
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
    backgroundColor: '#263238'
  },
  nested: {
    backgroundColor: 'transparent',
  }
});
