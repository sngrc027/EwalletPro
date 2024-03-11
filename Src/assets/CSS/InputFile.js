import {StyleSheet, Dimensions} from 'react-native';
import Fonts from '../Fonts/fonts';
import {FontSize} from '../Fonts/FontSize';
import {WHITE, PRIMARY_DARK, PRIMARY_COLOR} from '../colors/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.xl,
    color: WHITE,
    alignItems: 'flex-start',
    fontFamily: Fonts.primaryBold,
    color: '#000',
    fontWeight: '800',
  },
  sub: {
    color: '#707070',
    fontWeight: '500',
    fontFamily: Fonts.DefaultRegular,
    fontSize: FontSize.small,
  },
  container: {
    width: wp('100%'),
    flex: 1,
    alignItems: 'center',
  },
  box: {
    width: wp('100%'),
    alignItems: 'center',
    backgroundColor: WHITE,
    borderTopRightRadius: wp('8%'),
    borderTopLeftRadius: wp('8%'),
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 15,
  },
  back: {
    flex: 1,
    width: width,
  },

  logoImage: {
    width: wp('40%'),
    height: hp('15%'),
    marginTop: hp('1%'),
  },
  mainImage: {
    width: wp('85%'),
    height: hp('30%'),
    marginTop: hp('-5%'),
  },
  signInText: {
    fontSize: FontSize.large,
    fontFamily: Fonts.DefaultFont,
    color: PRIMARY_DARK,
  },
  drop: {
    position: 'absolute',
    width: width * 0.85,
    zIndex: 1,
  },
  backgroundVideo: {
    width: wp('75%'),
    height: hp('26%'),
    backgroundColor: 'black',
  },
  textInputContainer: {
    marginTop: '12%',
    width: wp('75%'),
  },
  roundedTextInput: {
    borderRadius: 5,
    borderBottomWidth: 0,
    backgroundColor: '#F6F6F6',
  },
  anime: {
    width: wp('50%'),
    height: hp('23%'),
    marginBottom: hp('1.2%'),
  },
  icon: {
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    borderRadius: wp('12%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
