import {
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FontSize} from '../assets/Fonts/FontSize';
import { WHITE} from '../assets/colors/Colors';
import fonts from '../assets/Fonts/fonts';

const {width, height} = Dimensions.get('screen');
const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.flexitem}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: wp('78%'),
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{...styles.sub, fontSize: FontSize.small, color: WHITE}}>
                Total Balance
              </Text>

              <Ionicons
                
                name="ios-chevron-up-sharp"
                size={20}
                color={WHITE}
              />
            </View>
            <Entypo
             
              name="dots-three-horizontal"
              size={20}
              color={WHITE}
            />
          </View>

          <Text style={{...styles.title, fontSize: FontSize.xl, color: WHITE}}>
            $2,548.00
          </Text>
        </View>
      </View>

      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: wp('78%'),
          }}>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: 12,
                  padding: 2,
                }}
                name="arrow-down"
                size={20}
                color={WHITE}
              />
              <Text
                style={{
                  ...styles.sub,
                  fontSize: FontSize.small,
                  color: WHITE,
                  fontFamily: fonts.DefaultRegular,
                  paddingLeft: 5,
                }}>
                Income
              </Text>
            </View>
            <Text
              style={{...styles.title, fontSize: FontSize.large, color: WHITE}}>
              $1,840.00
            </Text>
          </View>

          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: 12,
                  padding: 2,
                }}
                name="arrow-up"
                size={20}
                color={WHITE}
              />

              <Text
                style={{
                  ...styles.sub,
                  fontSize: FontSize.small,
                  color: WHITE,
                  fontFamily: fonts.DefaultRegular,
                  paddingLeft: 5,
                }}>
                Expenses
              </Text>
            </View>
            <Text
              style={{
                ...styles.title,
                fontSize: FontSize.large,
                color: WHITE,
                paddingLeft: 12,
              }}>
              $240.00
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2F7E79',
    width: wp('90%'),
    height: hp('27%'),
    borderRadius: wp('5%'),
    paddingHorizontal: wp('5.5%'),
    paddingVertical: wp('5.5%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 12,
    zIndex: 1,
  },
  flexitem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: hp('13%'),
  },
});
