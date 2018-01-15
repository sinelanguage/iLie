// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';

import { GridLines } from './components/grid-lines.view';
import { GraphLine } from './components/graph-line.view';
import { HonestlyTracking } from './components/honestly-tracking.view';
import { ILieLogo } from './components/ilie-logo.view';
import Button from '../../components/button';
import COLORS from '../../constants/colors';

const { height, width } = Dimensions.get('window');
export default class FirstTimeLaunch extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };
  
  state = {
    hasAccount: false,
  }

  render() {
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
          {this._whichButtonToRender()}
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

  _renderCreatePasswordButton = () => (
    <Button
      onPress={this._navigateToTour}
      buttonText="Create Password"
    />
  )

  _renderLoginButton = () => (
    <Button
      onPress={this._navigateToLogin}
      buttonText="Login"
    />
  )

  _whichButtonToRender = () => {
    const { hasAccount } = this.state;
    return (
      <View style={styles.buttonContainerWrapper}>
        <View style={styles.buttonContainerFlexSpacer}></View>
        <View style={styles.buttonContainer}>
          {hasAccount ? this._renderLoginButton() : this._renderCreatePasswordButton()}
        </View>
      </View>
    )
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#263238',
  },
  buttonContainerWrapper: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'column',
    zIndex: 10,
  },
  buttonContainerFlexSpacer: {
    flex: 2,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
