// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import TextInputField from '../../components/textInputField';
import Button from '../../components/button';
import COLORS from '../../constants/colors';

export default class Tour extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: COLORS.darkBlueGrey,
    navBarTextColor: 'white',
    topBarElevationShadowEnabled: false,
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.halfContainer}>
          <TextInputField
            placeholder="Create a username"
          />
          <TextInputField
            placeholder="Enter an email for password recovery"
          />
          <TextInputField
            placeholder="Create a password"
          />
        </View>
        <View style={styles.halfContainer}>
        <Button
          onPress={() => null}
          buttonText="Create your profile"
        />
        </View>
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
    backgroundColor: COLORS.darkBlueGrey,
    flexDirection: 'column',
  },
  halfContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50,
  }
});

/* <Button
          onPress={this._navigateToLogin}
          title="login"
          accessibilityLabel="login"
        /> */