import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../assets/CSS/InputFile';
import {FontSize} from '../assets/Fonts/FontSize';
import {PRIMARY_COLOR, WHITE} from '../assets/colors/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../util/Button';
const Onboard = ({navigation}) => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View
        style={{
          ...styles.container,
          backgroundColor: WHITE,
          alignItems: 'center',
        }}>
        <Image
          style={design.image}
          source={require('../assets/Images/ONBOARD.png')}
        />
        <View style={{height: hp('14%')}}>
          <Text
            style={{
              ...styles.title,
              fontSize: FontSize.xxl,
              color: PRIMARY_COLOR,
              textAlign: 'center',
            }}>
            Spend Smarter{' '}
          </Text>
          <Text
            style={{
              ...styles.title,
              fontSize: FontSize.xxl,
              color: PRIMARY_COLOR,
              textAlign: 'center',
              marginTop: hp('-2%'),
            }}>
            Save More
          </Text>
        </View>
        <View>
          <Button
            color={'rgb(105,174,169)'}
            text={WHITE}
            title={'Get Started'}
            press={() => navigation.navigate('Tab')}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: hp('2%')}}>
          <Text style={{...styles.sub, fontSize: FontSize.small}}>
            Already Have Account?
          </Text>
          <Text
            style={{
              ...styles.sub,
              fontSize: FontSize.small,
              color: PRIMARY_COLOR,
            }}>
            Log in
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboard;

const design = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    width: wp('75%'),
  },
});
