import { Navigation } from 'react-native-navigation';
import { registerScreens } from '../screens';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'example.One',
    title: 'Welcome',
    navigatorStyle: {},
    navigatorButtons: {}
  },
});
