import React from 'react';

import {
  StyleSheet,
  Image,
} from 'react-native';

export const GridLines = () => (
  <Image
    style={styles.gridLines}
    source={require('../../../assets/img/splash/grid-lines.png')}
  />
)

const styles = StyleSheet.create({

  gridLines: {
    position: 'absolute',
    zIndex: 1,
    top: 10,
    left: -15,
    opacity: 0.25,
  }

})
