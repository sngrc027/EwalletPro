import {Text, View, SafeAreaView, FlatList, Image} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../assets/CSS/InputFile';
import {FontSize} from '../assets/Fonts/FontSize';
import Header from '../util/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {WHITE, PRIMARY_COLOR, GRAY2} from '../assets/colors/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const Wallet = ({navigation}) => {
  const [record, setRecord] = useState([
    {
      src: require('../assets/Images/spotify.png'),
      name: 'Spotify',
      time: 'Today',
      amt: '+$ 850.00',
      color: '#2ed573',
    },
    {
      src: require('../assets/Images/profile.png'),
      name: 'Transfer',
      time: 'Yesterday',
      amt: '-$ 85.00',
      color: '#e55039',
    },
    {
      src: require('../assets/Images/you.png'),
      name: 'Youtube',
      time: 'Jan 16,2022',
      amt: '-$ 11.99',
      color: '#e55039',
    },
    {
      src: require('../assets/Images/pay.png'),
      name: 'Paypal',
      time: 'Jan 30,2022',
      amt: '+$ 1406.00',
      color: '#2ed573',
    },
    {
      src: require('../assets/Images/up.png'),
      name: 'Upwork',
      time: 'Today',
      amt: '+$ 1850.00',
      color: '#2ed573',
    },
  ]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{width: wp('100%'), height: hp('20%')}}>
          <Header name={'Wallet'} />
        </View>

        <View style={styles.box}>
          <View style={{marginTop: hp('5%'), alignItems: 'center'}}>
            <Text style={{...styles.sub, color: GRAY2, marginBottom: 5}}>
              Total Balance
            </Text>
            <Text style={styles.title}>$ 2,548.00</Text>
          </View>

          <View
            style={{
              marginTop: hp('3%'),
              alignItems: 'center',
              flexDirection: 'row',
              width: wp('55%'),
              justifyContent: 'space-between',
            }}>
            <View style={styles.icon}>
              <AntDesign
                style={{
                  borderRadius: 12,
                  padding: 14,
                }}
                name="plus"
                size={27}
                color={PRIMARY_COLOR}
              />
            </View>
            <View style={styles.icon}>
              <Ionicons
                style={{
                  borderRadius: 12,
                  padding: 14,
                  width: 55,
                }}
                name="qr-code-outline"
                size={25}
                color={PRIMARY_COLOR}
              />
            </View>
            <View style={styles.icon}>
              <Feather
                style={{
                  borderRadius: 12,
                  padding: 14,
                  width: 55,
                }}
                name="send"
                size={25}
                color={PRIMARY_COLOR}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: hp('1%'),
              alignItems: 'center',
              flexDirection: 'row',
              width: wp('54%'),
              justifyContent: 'space-between',
            }}>
            <Text style={{...styles.sub, marginLeft: wp('3.5%')}}>Add</Text>
            <Text style={styles.sub}>Pay</Text>
            <Text style={{...styles.sub, marginRight: wp('3%')}}>Send</Text>
          </View>

          <View
            style={{
              marginTop: hp('7%'),
              alignItems: 'center',
              flexDirection: 'row',
              width: wp('85.5%'),
              justifyContent: 'space-between',
              height: hp('6%'),
              borderRadius: wp('12%'),
              paddingHorizontal: 5,
              backgroundColor: '#F4F6F6',
            }}>
            <Text
              style={{
                ...styles.sub,
                marginLeft: wp('3.5%'),
                width: wp('40%'),
                textAlign: 'center',
              }}>
              Transiction
            </Text>

            <Text
              style={{
                ...styles.sub,
                marginRight: wp('3%'),
                width: wp('40%'),
                backgroundColor: WHITE,
                textAlign: 'center',
                paddingVertical: 12,
                borderRadius: wp('12%'),
                color: GRAY2,
              }}>
              Upcoming Bills
            </Text>
          </View>

          <View style={{marginTop: hp('2%')}}></View>
          <ScrollView showsVerticalScrollIndicator={false} style={{}}>
            <View
              style={{
                width: wp('100%'),
                alignItems: 'center',
                marginTop: hp('0%'),
                height: hp('50%'),
              }}>
              <FlatList
                keyExtractor={(item, index) => item.id}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                data={record}
                horizontal={false}
                scrollEnabled={false}
                renderItem={({item, index}) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: wp('85%'),
                      margin: hp('1%'),
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={{
                          backgroundColor: '#F0F6F5',
                          padding: 6,
                          borderRadius: 5,
                        }}>
                        <Image
                          source={item.src}
                          style={{
                            width: wp('10%'),
                            height: hp('5%'),
                            resizeMode: 'contain',
                          }}
                        />
                      </View>

                      <View style={{marginLeft: wp('3%')}}>
                        <Text
                          style={{...styles.title, fontSize: FontSize.small}}>
                          {item.name}
                        </Text>
                        <Text style={styles.sub}>{item.time}</Text>
                      </View>
                    </View>

                    <View style={{marginTop: 5}}>
                      <Text
                        style={{
                          ...styles.title,
                          fontSize: FontSize.medium,
                          color: item.color,
                        }}>
                        {item.amt}
                      </Text>
                    </View>
                  </View>
                )}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Wallet;
