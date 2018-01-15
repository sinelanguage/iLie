import React from 'react';
import {
  StyleSheet,
  Image,
  View,
} from 'react-native';
import Graph from '../../../../assets/img/splash/graph-line.png';

export const GraphLine = () => (
  <View style={styles.graphLineContainer}>
    <Image style={styles.graphLine} source={Graph} />
  </View>
)

const styles = StyleSheet.create({

  graphLineContainer: {
    position: 'absolute',
    zIndex: 2,
  },

  graphLine: {
    opacity: 0.3,
  }

})
