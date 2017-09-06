// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

import { getStore, store } from '../index';
import { intialActionCreator } from '../../actions/initial.action';

export default class Two extends Component {
  componentDidMount() {
    getStore();
    store.dispatch(intialActionCreator('Another World'));
    getStore();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          two screen
        </Text>
        <Button
          onPress={this._toOne}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
  _toOne = () => {
    this.props.navigator.resetTo({
      screen: 'example.One',
      passProps: {},
      animated: true,
      animationType: 'fade',
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
