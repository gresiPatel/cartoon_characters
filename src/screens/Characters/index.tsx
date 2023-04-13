import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {styles} from './style';

const DATA: object[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
  },
];

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

type ListItem = {
  item: object;
  index: number;
};

const Item = () => (
  <View>
    <Text>{}</Text>
  </View>
);

export const Characters = ({navigation}: NativeStackScreenProps<{}>) => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text>this is Characters screen</Text>
      <FlatList
        data={DATA}
        renderItem={({item}: ListItem) => <Item />}
        keyExtractor={(item, index) => `char_${index}`}
      />
    </View>
  );
};
