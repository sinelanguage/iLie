import React from 'react';

import {
  StyleSheet,
  Image,
  View,
} from 'react-native';

import iLieLogo from '../../../../assets/img/splash/iLIE.png';

export const ILieLogo = () => (
  <View style={styles.iLieLogoContainer}>
    <Image source={iLieLogo} style={{transform: [{scale: 0.5}]}}/>
  </View>
)

const styles = StyleSheet.create({

  iLieLogoContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  }

})
