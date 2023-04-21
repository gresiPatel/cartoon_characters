import React, {useEffect, useRef} from 'react';
import {View, Image, Animated, Easing} from 'react-native';

import {ScreenProps} from '../../types';
import {responsiveHeight} from '../../resources';

import {styles} from './style';

export const Splash = ({navigation}: ScreenProps) => {
  const topAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animateIcon();
  }, []);

  function animateIcon() {
    Animated.timing(topAnimation, {
      toValue: responsiveHeight(35),
      duration: 2000,
      useNativeDriver: false,
      easing: Easing.in(Easing.bounce),
    }).start(() => {
      navigation.navigate('Characters');
    });
  }

  return (
    <View style={styles.container}>
      <Animated.View style={{top: topAnimation}}>
        <Image
          source={require('../../../asset/app_icon.jpeg')}
          style={styles.appIconStyle}
        />
      </Animated.View>
    </View>
  );
};
