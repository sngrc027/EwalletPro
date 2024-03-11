import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Fonts from '../assets/Fonts/fonts';
import {FontSize} from '../assets/Fonts/FontSize';

const {width, height} = Dimensions.get('screen');

const Button = ({press, title, color, text}) => {
  const [loading, setLoading] = React.useState(false);

  return (
    <TouchableOpacity
      style={{...styles.btn, backgroundColor: color}}
      onPress={press}>
      {loading ? (
        <ActivityIndicator
          animating={true}
          color={'#fff'}
          style={{right: 145}}
        />
      ) : null}

      <Text style={{color: text, fontSize: FontSize.medium}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#fff',
    fontFamily: Fonts.primaryBold,
    width: width * 0.85,
    height: height * 0.066,
    borderRadius: wp('25%'),
    marginTop: hp('-2%'),
    marginLeft: wp('0%'),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
});
