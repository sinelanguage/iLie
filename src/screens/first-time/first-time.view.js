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
import defaultNavigatorStyle from '../../constants/navigator.styles';

const { height, width } = Dimensions.get('window');
export default class FirstTimeLaunch extends Component {
  static navigatorStyle = {
    ...defaultNavigatorStyle,
    navBarHidden: true
  };
  
  state = {
    hasAccount: false,
  }

  render() {
    return (
      <View style={styles.container}>
          <GridLines />
          <GraphLine />
          <HonestlyTracking />
          <ILieLogo />
          {this._whichButtonToRender()}
      </View>
    );
  }
  _navigateToTour = () => {
    this.props.navigator.push({
      screen: 'view.tour',
      title: 'SIGN UP',
      passProps: {},
      animated: true,
      backButtonHidden: true,
    });
  }
  _navigateToLogin = () => {
    this.props.navigator.resetTo({
      screen: 'view.login',
      title: 'Login',
      passProps: {},
      animated: true,
      backButtonHidden: true,
    });
  }

  _renderCreatePasswordButton = () => (
    <Button
      onPress={this._navigateToTour}
      buttonText="Create your profile"
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
    backgroundColor: COLORS.darkBlueGrey,
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
