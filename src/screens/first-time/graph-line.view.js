import React from 'react';

import {
  StyleSheet,
  Image,
} from 'react-native';

export const GraphLine = () => (
  <Image
    style={styles.graphLine}
    source={require('../../../assets/img/splash/graph-line.png')}
  />
)

const styles = StyleSheet.create({

  graphLine: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 20,
    height: '100%',
    resizeMode: 'contain',
  }

})
