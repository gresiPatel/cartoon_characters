import {StyleSheet, Platform} from 'react-native';

import {responsiveWidth, responsiveHeight, colors} from '../../resources';

export const styles = StyleSheet.create({
  cardView: {
    flex: 1 / (Platform.OS === 'web' ? 6 : 2),
    Height: responsiveHeight(30),
    borderRadius: responsiveHeight(1),
    margin: 10,
    backgroundColor: colors.grey,
    overflow: 'hidden',
  },
  listContentStyle: {
    flexGrow: 1,
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(1),
    backgroundColor: colors.background,
  },
  avtarStyle: {
    height: responsiveHeight(18),
    justifyContent: 'flex-end',
  },
  nameText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    backgroundColor: colors.blackTransparent,
    paddingVertical: responsiveHeight(0.5),
  },
  infoContainer: {
    marginHorizontal: 10,
    marginVertical: responsiveHeight(0.2),
  },
  titleStyle: {
    color: colors.lightGrey,
    fontSize: 12,
    marginTop: responsiveHeight(0.2),
  },
  textStyle: {
    color: colors.white,
    fontWeight: 'normal',
    fontSize: 12,
  },
});
