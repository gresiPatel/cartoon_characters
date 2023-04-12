import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

import StackNavigator from './navigators';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <View style={{alignItems: 'center', flex: 1, backgroundColor: 'red'}}>
        <StackNavigator />
      </View>
    </SafeAreaView>
  );
};

export default App;
