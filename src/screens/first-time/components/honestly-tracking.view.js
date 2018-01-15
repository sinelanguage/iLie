import React from 'react';

import {
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';

import COLORS from '../../../styles/colours';
const honestText = 'Honestly Tracking';

export const HonestlyTracking = () => (
  <View style={styles.honestlyTracking}>
    <Text
      allowFontScaling={false}
      style={styles.honestText}>{honestText.toUpperCase()}
    </Text>
  </View>
)

const styles = StyleSheet.create({

  honestlyTracking: {
    position: 'absolute',
    zIndex: 3,
    top: '63%',
    left: 0,
    width: 135,
    height: 20,
    backgroundColor: COLORS.LieBlue,
    justifyContent: 'center',
  },

  honestText: {
    color: 'white',
    fontSize: 12,
    marginLeft: 2,
  }

})
