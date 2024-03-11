import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BLACK, WHITE} from '../assets/colors/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Fonts from '../assets/Fonts/fonts';
import {FontSize} from '../assets/Fonts/FontSize';
import Card from './Card';

const Header = ({name}) => {
  return (
    <SafeAreaView>
      <StatusBar translucent={true} backgroundColor={'transparent'} />

      <View style={styles.heading}>
        {name == 'Statistics' ? null : (
          <Image
            source={require('../assets/Images/av.jpg')}
            style={{width: wp('100%'), height: hp('40%')}}
          />
        )}
        <View style={styles.flexitem}>
          {name == 'Home' ? (
            <View style={{paddingHorizontal: wp('3%')}}>
              <Text
                style={{...styles.sub, fontSize: FontSize.small, color: WHITE}}>
                Good afternoon,
              </Text>
              <Text
                style={{...styles.title, fontSize: FontSize.xl, color: WHITE}}>
                Enjelin Morgeana
              </Text>
            </View>
          ) : (
            <>
              <TouchableOpacity>
                <Ionicons
                  style={{
                    borderRadius: 12,
                    padding: 14,
                    width: 55,
                  }}
                  name="ios-chevron-back-outline"
                  size={25}
                  color={name == 'Statistics' ? BLACK : WHITE}
                />
              </TouchableOpacity>

              <View>
                <Text
                  style={{
                    ...styles.title,
                    color: name == 'Statistics' ? BLACK : WHITE,
                  }}>
                  {name}
                </Text>
              </View>
            </>
          )}

          {name == 'Statistics' ? (
            <TouchableOpacity>
              <Ionicons
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',

                  borderRadius: 12,
                  padding: 12,
                  // width: 55,
                }}
                name="ios-download-outline"
                size={23}
                color={BLACK}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Ionicons
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',

                  borderRadius: 12,
                  padding: 12,
                  // width: 55,
                }}
                name="notifications-outline"
                size={23}
                color={WHITE}
              />
            </TouchableOpacity>
          )}
        </View>

        {name == 'Home' ? (
          <View style={{marginTop: hp('-19%')}}>
            <Card />
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  heading: {
    width: wp('100%'),
    height: wp('10%'),
    alignItems: 'center',
  },
  flexitem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp('95%'),
    position: 'absolute',
    marginTop: hp('6%'),
  },
  title: {
    fontSize: FontSize.large,
    color: WHITE,
    alignItems: 'flex-start',
    fontFamily: Fonts.primaryBold,
  },
});
