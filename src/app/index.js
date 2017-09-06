import { Navigation } from 'react-native-navigation';
import { registerScreens } from '../screens';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'view.first-time',
    title: 'Let\'s Begin',
    navigatorStyle: {},
    navigatorButtons: {}
  },
});
