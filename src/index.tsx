import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

//imported root navigator from navigators folder
import StackNavigator from './navigators';
import {colors} from './resources';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <StackNavigator />
    </SafeAreaView>
  );
};

export default App;
