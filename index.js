import {AppRegistry, Platform} from 'react-native';
import App from './src';
import AppInfo from './app.json';

AppRegistry.registerComponent(AppInfo.name, () => App);

Platform.OS === 'web' &&
  AppRegistry.runApplication(AppInfo.name, {
    initialProps: {},
    rootTag: document.getElementById('app-root'),
  });
