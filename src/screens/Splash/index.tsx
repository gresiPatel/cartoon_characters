import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../navigators';

import {styles} from './style';

export const Splash = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Characters');
    }, 3000);
  }, []);
  {
  }
  return (
    <View style={styles.container}>
      <Text>this is splash screen</Text>
    </View>
  );
};
