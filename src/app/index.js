import { Navigation } from 'react-native-navigation';
import { registerScreens } from '../screens';
import colors from '../constants/colors';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'view.first-time',
    title: 'Let\'s Begin',
    navigatorStyle: {},
    navigatorButtons: {},
    screenBackgroundColor: colors.darkBlueGrey,
  },
});
