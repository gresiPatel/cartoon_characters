import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';

import RNContentLoader, {Rect} from 'react-content-loader/native';

import {CharacterCardProps} from '../../types';
import {styles} from './style';
import {colors, responsiveHeight} from '../../resources';

export const CharacterCard = ({
  name,
  image,
  species,
  gender,
  status,
  location,
  origin,
  onPressCard,
}: CharacterCardProps) => (
  <TouchableOpacity style={styles.cardView} onPress={onPressCard}>
    {/* character's picture with name */}
    <ImageBackground source={{uri: image}} style={styles.avtarStyle}>
      <Text style={styles.nameText}>{name}</Text>
    </ImageBackground>

    <View style={styles.infoContainer}>
      {/* character's status, species and gender */}
      <Text style={[styles.textStyle, {textAlign: 'center'}]}>
        <Text
          style={{
            fontWeight: 'bold',
            color:
              status === 'Alive'
                ? colors.green
                : status === 'Dead'
                ? colors.red
                : colors.lightGrey,
          }}>
          {status}
        </Text>{' '}
        - {species} ({gender})
      </Text>

      {/* character's current location */}
      <Text style={styles.titleStyle}>Last known location : </Text>
      <Text style={styles.textStyle}>{location.name}</Text>

      {/* character's origin */}
      <Text style={styles.titleStyle}>Origin : </Text>
      <Text style={styles.textStyle}>{origin.name}</Text>
    </View>
  </TouchableOpacity>
);

//content loader which has same height-width as CharacterCard view
export const ContentLoader = () => (
  <RNContentLoader
    style={styles.cardView}
    height={responsiveHeight(30)}
    speed={1}
    backgroundColor={colors.loader}
    foregroundColor={colors.background}>
    <Rect
      x={0}
      y={0}
      width="100%"
      height="100%"
      rx={responsiveHeight(1)}
      ry={responsiveHeight(1)}
    />
  </RNContentLoader>
);
