import React, {Component} from 'react';
import {Dimensions, Text} from 'react-native';

import {View, StyleSheet, Image} from 'react-native';

const {height: screenHeight, width: screenWidth} = Dimensions.get('screen');
const tickCoverage = screenHeight - 100;


export default class GridLines extends Component {

  state = {
    tickHeight: 0
  }

  renderShorterTicks = () => {
    const ticks = [];
    for (let index = 0; index < 10; index++) {
      ticks.push(
        <View key={Math.random()} style={styles.tick}></View>
      )
    };
    return ticks;
  }

  renderGroupOfTicks = () => {
    const ticks = [];
    const widerTick = (
      <View key={Math.random()} style={styles.widerTick}></View>
    )
    ticks.push([this.renderShorterTicks(), widerTick])
    return ticks
  }

  renderAllTicks = () => {
    let totalHeight = 0;
    let allTicks = [];

    const addGroupOfTicks = () => {
      allTicks.push(this.renderGroupOfTicks());
      totalHeight += this.state.viewHeight;
      makeAllTicks();
    }

    const makeAllTicks = () => {
      if (totalHeight < (tickCoverage - this.state.viewHeight)) {
        addGroupOfTicks();
      };
    };

    makeAllTicks();

    return allTicks
  }

  onLayout = e => {
    this.setState({viewHeight: e.nativeEvent.layout.height})
  }

  render() {
    console.log("hello")
    return (
      <View style={styles.container}>
        <View onLayout={this.onLayout}>{this.renderGroupOfTicks()}</View>
        {this.renderAllTicks()}
        <Text>HELLO</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    height: tickCoverage,
    overflow: 'hidden'
  },
  tick: {
    backgroundColor: 'white',
    width: 20,
    height: 1,
    marginBottom: 4,
    opacity: 0.3
  },
  widerTick: {
    backgroundColor: 'white',
    width: 40,
    height: 1,
    marginBottom: 4,
    opacity: 0.3
  }

})
