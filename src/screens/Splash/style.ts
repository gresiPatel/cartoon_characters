import {StyleSheet} from 'react-native';
import {colors, responsiveHeight} from '../../resources';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  appIconStyle: {
    height: responsiveHeight(25),
    aspectRatio: 1,
  },
});
