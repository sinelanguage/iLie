import React, {Component} from 'react';

import {View, StyleSheet, Image, Dimensions} from 'react-native';
import TestTickLines from '../../../../assets/img/splash/TestLineTicks.png';
import Lines from '../../../../assets/img/splash/grid-lines.png';

const { height } = Dimensions.get('screen');
const tickCoverage = (height - 100);


export const GridLines = () =>  (
  <View style={styles.wrapper}>
    <View style={styles.container}>
      <Image style={[styles.lines, { transform: [
        {translateX: -10}
      ] }]} source={Lines} />
    </View>
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    zIndex: 1,
  },
  container: {
    height: tickCoverage,
    flexDirection: 'column',
    overflow: 'hidden',
  },

  lines: {
  }
})
