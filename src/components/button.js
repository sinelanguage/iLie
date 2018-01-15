import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import COLORS from '../constants/colors';

export default ({onPress, buttonText}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.buttonStyled}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  buttonStyled: {
    width: 250,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blue,
  },
  buttonText: {
    color: 'white',
  }
})
