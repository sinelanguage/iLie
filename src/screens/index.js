import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import configureStore from '../store/configure.store';
import { initalState } from '../store/initial.state';
import { intialActionCreator } from '../actions/initial.action';

export const store = configureStore(initalState);
export const getStore = () => console.log('STORE: ', store.getState(), store);

import FirstTimeLaunch from './first-time/first-time.view';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('view.first-time', () => FirstTimeLaunch, store, Provider);
}
