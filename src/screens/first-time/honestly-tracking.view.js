import React from 'react';

import {
  StyleSheet,
  Image,
} from 'react-native';

export const HonestlyTracking = () => (
  <Image
    style={styles.honestlyTracking}
    source={require('../../../assets/img/splash/honestly-tracking.png')}
  />
)

const styles = StyleSheet.create({

  honestlyTracking: {
    position: 'absolute',
    zIndex: 3,
    top: '63%',
    left: 0,
    width: 130,
    resizeMode: 'contain',
  }

})
