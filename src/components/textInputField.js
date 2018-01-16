import React from 'react';

import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';

const TextInputField = ({placeholder}) => (
  <View style={styles.textInputView}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="white"
      />
  </View>
);

const styles = StyleSheet.create({
  textInput: {
    color: 'white',
    fontSize: 14,
  },
  textInputView: {
    borderBottomColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 15,  
    width: '80%',
  }
})

export default TextInputField;