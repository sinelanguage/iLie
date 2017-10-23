import React from 'react';

import {
  View,
  StyleSheet,
  Image,
} from 'react-native';

export const GridLines = () => (
  <View style={styles.container}>

  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    zIndex: 1,
    ...StyleSheet.absoluteFillObject,
    width: 20,
  },

})
