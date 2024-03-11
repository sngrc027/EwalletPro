import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../assets/CSS/InputFile';
import {FontSize} from '../assets/Fonts/FontSize';
import Header from '../util/Header';

import {WHITE, BLACK, GRAY2} from '../assets/colors/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import fonts from '../assets/Fonts/fonts';

const MyProfile = () => {
  const data = [
    {
      name: require('../assets/Images/invite-friends-3-512.png'),
      title: 'Invite Friends',
    },
    {name: require('../assets/Images/user-128-512.png'), title: 'Account info'},
    {
      name: require('../assets/Images/information-26-512.png'),
      title: 'Personal Profile',
    },
    {
      name: require('../assets/Images/message-message-3-512.png'),
      title: 'Message center',
    },
    {
      name: require('../assets/Images/security-47-512.png'),
      title: 'Login and security',
    },
    {
      name: require('../assets/Images/data-40-512.png'),
      title: 'Data and privacy',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{width: wp('100%'), height: hp('20%')}}>
          <Header name={'Profile'} />
        </View>

        <View style={my.box}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../assets/Images/profile.png')}
              style={{
                width: wp('34.6%'),
                height: hp('17.5%'),
                borderRadius: wp('52%'),
                borderWidth: 3,
                borderColor: WHITE,
              }}
            />
            <Text
              style={{
                ...styles.title,
                fontSize: FontSize.large,
                color: BLACK,
                paddingTop: 5,
              }}>
              {' '}
              Enjelin Morgeana
            </Text>
            <Text
              style={{
                ...styles.sub,
                fontSize: FontSize.small,
                color: GRAY2,
                fontFamily: fonts.DefaultRegular,
              }}>
              @enjelin_morgeana
            </Text>
          </View>

          {/* ////////////////////////////////////////////////////////////////////////// */}
          <View style={{marginTop: hp('5%'), width: wp('85%')}}>
            <FlatList
              keyExtractor={(item, index) => item.id}
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}
              data={data}
              scrollEnabled={false}
              renderItem={({item, index}) => (
                <View style={my.flex}>
                  <View>
                    <Image
                      source={item.name}
                      style={{
                        width: wp('5.5%'),
                        height: hp('3.5%'),
                        resizeMode: 'contain',
                      }}
                    />
                  </View>
                  <View style={{marginHorizontal: wp('5%')}}>
                    <Text
                      style={{
                        ...styles.sub,
                        fontSize: FontSize.medium,
                        color: BLACK,
                        fontFamily: fonts.DefaultRegular,
                      }}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyProfile;

const my = StyleSheet.create({
  box: {
    marginTop: hp('10%'),
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('3%'),
  },
});
