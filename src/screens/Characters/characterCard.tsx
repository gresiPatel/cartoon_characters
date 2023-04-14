import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';

import {CharacterType} from '../../types';
import {styles} from './style';

export const CharacterCard = ({
  name,
  image,
  species,
  gender,
  status,
  location,
}: CharacterType) => (
  <View style={styles.cardView}>
    <ImageBackground source={{uri: image}} style={styles.avtarStyle}>
      <Text style={styles.nameText}>{name}</Text>
    </ImageBackground>
    <View style={styles.infoContainer}>
      <Text style={[styles.textStyle, {textAlign: 'center'}]}>
        {status} - {species} ({gender})
      </Text>

      <Text style={styles.titleStyle}>Last known location : </Text>
      <Text style={styles.textStyle}>{location.name}</Text>
    </View>
  </View>
);
