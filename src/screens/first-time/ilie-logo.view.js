import React from 'react';

import {
  StyleSheet,
  Image,
} from 'react-native';

export const ILieLogo = () => (
  <Image
    style={styles.iLieLogo}
    source={require('../../../assets/img/splash/iLIE.png')}
  />
)

const styles = StyleSheet.create({

  iLieLogo: {
    position: 'absolute',
    zIndex: 4,
    top: '30%',
    left: '30%',
    width: 235,
    height: 129,
    resizeMode: 'contain',
  }

})
