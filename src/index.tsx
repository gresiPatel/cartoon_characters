import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

//imported root navigator from navigators folder
import StackNavigator from './navigators';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <StackNavigator />
    </SafeAreaView>
  );
};

export default App;
