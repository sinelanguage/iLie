import React from 'react';

import {
  View,
  StyleSheet,
  Image,
} from 'react-native';

export const GridLines = () => {
  renderGroupOfTicks = () => {
    const ticks = [];
    for (let index = 0; index < 10; index++) {
      ticks.push(<View key={index} style={styles.tick}></View>) 
    };
    ticks.push(<View key={index} style={styles.widerTick}></View>)
    return ticks
  }
  renderWiderTicks = () => {
    const ticks = [];
    for (let index = 0; index < 100; index++) {
      ticks.push(<View key={index} style={styles.tick}></View>) 
    };
    return ticks
  }

  return (
    <View style={styles.container}>
      {renderTicks()} 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    ...StyleSheet.absoluteFillObject,
    width: 40,
    flexDirection: 'column',
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
