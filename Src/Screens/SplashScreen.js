import {Text, View, SafeAreaView, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../assets/CSS/InputFile';
import {FontSize} from '../assets/Fonts/FontSize';
import {PRIMARY_COLOR, WHITE} from '../assets/colors/Colors';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.push('Onboard');
    }, 1000);
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View
        style={{
          ...styles.container,
          backgroundColor: PRIMARY_COLOR,
          justifyContent: 'center',
        }}>
        <Text style={{...styles.title, fontSize: FontSize.xxl, color: WHITE}}>
          mono
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
