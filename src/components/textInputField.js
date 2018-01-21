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
    borderBottomColor: "rgba(255,255,255,0.5)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 11,  
    width: '80%',
  }
})

export default TextInputField;