// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import TextInputField from '../../components/textInputField';
import Button from '../../components/button';
import COLORS from '../../constants/colors';

export default class Tour extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: COLORS.darkBlueGrey,
    navBarTextColor: 'white',
    topBarElevationShadowEnabled: false,
  }

  static navigatorButtons = {
    rightButtons: [
      {
        title: 'Edit', // for a textual button, provide the button title (label)
        id: 'edit', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
        testID: 'e2e_rules', // optional, used to locate this view in end-to-end tests
        disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
        showAsAction: 'ifRoom', // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar.
        buttonColor: 'blue', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
      },
    ]
  };

  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent = (event) => { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      
      if (event.id == 'edit') {
        this._back();
      }
    }
  }

  render() {
    return (
      <View style={styles.pageContainer}>
        <View style={styles.firstContainer}></View>
        <View style={styles.secondContainer}>
          <TextInputField
            placeholder="Create a username"
          />
          <TextInputField
            placeholder="Enter an email for password recovery"
          />
          <TextInputField
            placeholder="Create a password"
          />
        </View>
        <View style={styles.thirdContainer}>
        <Button
          onPress={() => null}
          buttonText="Create your profile"
        />
        </View>
      </View>
    );
  }

  _back = () =>  this.props.navigator.pop();

  _navigateToLogin = () => {
    this.props.navigator.resetTo({
      screen: 'view.login',
      title: 'Login',
      passProps: {},
      animated: true,
      animationType: 'fade',
    });
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: COLORS.darkBlueGrey,
    flexDirection: 'column',
  },
  firstContainer: {
    flex: 0.9,
  },
  secondContainer: {
    flex: 0.85,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    // paddingBottom: 100
  },
  thirdContainer: {
    flex: 1.25,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});

/* <Button
          onPress={this._navigateToLogin}
          title="login"
          accessibilityLabel="login"
        /> */