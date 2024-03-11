import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  Pressable,
} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../assets/CSS/InputFile';
import {FontSize} from '../assets/Fonts/FontSize';
import Header from '../util/Header';
import {BLACK, GRAY} from '../assets/colors/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import fonts from '../assets/Fonts/fonts';

const Home = ({navigation}) => {
  const [record, setRecord] = useState([
    {
      src: require('../assets/Images/spotify.png'),
      name: 'Spotify',
      time: 'Today',
      amt: '+$ 850.00',
      color: '#2ed573',
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

  /////////////////////////////////////usermap///////////////////////////////
  const profile = [
    {
      src: require('../assets/Images/profile.png'),
    },
    {
      src: require('../assets/Images/p1.png'),
    },
    {
      src: require('../assets/Images/p2.png'),
    },
    {
      src: require('../assets/Images/p3.png'),
    },
    {
      src: require('../assets/Images/p4.png'),
    },
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{width: wp('100%'), height: hp('20%')}}>
          <Header name={'Home'} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: wp('90%'),
              height: hp('60%'),
              marginTop: hp('30%'),
              zIndex: -1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  ...styles.title,
                  fontSize: FontSize.medium,
                  color: BLACK,
                }}>
                Transaction History
              </Text>
              <Text
                style={{
                  ...styles.sub,
                  fontSize: FontSize.small,
                  color: GRAY,
                  fontFamily: fonts.DefaultRegular,
                }}>
                See all
              </Text>
            </View>

            {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
            <View
              style={{
                alignItems: 'center',
                marginTop: hp('0.7%'),
                height: hp('36%'),
              }}>
              <FlatList
                // contentContainerStyle={{ paddingBottom:180 }}
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

            {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  ...styles.title,
                  fontSize: FontSize.medium,
                  color: BLACK,
                }}>
                Transaction History
              </Text>
              <Text
                style={{
                  ...styles.sub,
                  fontSize: FontSize.small,
                  color: GRAY,
                  fontFamily: fonts.DefaultRegular,
                }}>
                See all
              </Text>
            </View>

            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
            <View style={{paddingTop: 5}}>
              <FlatList
                // contentContainerStyle={{ paddingBottom:180 }}
                keyExtractor={(item, index) => item.id}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                data={profile}
                horizontal
                scrollEnabled={false}
                renderItem={({item, index}) => (
                  <View style={{marginHorizontal: wp('1.6%')}}>
                    <Image
                      source={item.src}
                      style={{
                        width: wp('15%'),
                        height: hp('7.6%'),
                        resizeMode: 'contain',
                        borderRadius: wp('52%'),
                      }}
                    />
                  </View>
                )}
              />
            </View>
          </View>
        </ScrollView>
      </View>

   
    </SafeAreaView>
  );
};

export default Home;
const my = StyleSheet.create({
  shadowButton: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
