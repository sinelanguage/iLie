// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

export default class Data extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Data
        </Text>
        <Button
          onPress={this._navigateToEnterLie}
          title="record a another lie"
          accessibilityLabel="record a another lie"
        />
        <Button
          onPress={this._navigateToChart}
          title="view chart"
          accessibilityLabel="view chart"
        />
        <Button
          onPress={this._navigateToTimeline}
          title="view timeline"
          accessibilityLabel="view timeline"
        />
      </View>
    );
  }
  _navigateToEnterLie = () => {
    this.props.navigator.resetTo({
      screen: 'view.lie',
      passProps: {},
      animated: true,
      animationType: 'fade',
    });
  }
  _navigateToChart = () => {
    this.props.navigator.push({
      screen: 'view.chart',
      title: 'chart',
      passProps: {},
      animated: true,
    });
  }
  _navigateToTimeline = () => {
    this.props.navigator.push({
      screen: 'view.timeline',
      title: 'timeline',
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
