// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

import { getStore, store } from '../index';
import { intialActionCreator } from '../../actions/initial.action';

export default class One extends Component {
  componentDidMount() {
    getStore();
    store.dispatch(intialActionCreator('Another World'));
    getStore();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          screen one
        </Text>
        <Button
          onPress={this._toTwo}
          title="Learn More"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
  _toTwo = () => {
    this.props.navigator.resetTo({
      screen: 'example.Two',
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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
