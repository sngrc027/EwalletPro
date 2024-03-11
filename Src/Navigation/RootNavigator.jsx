import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import TabStack from './TabStack';
import { screenName } from '../Constants';

const RootNavigator = () => {
  const RootStack = createNativeStackNavigator();

  const navigation = useNavigation();

  return (
    <RootStack.Navigator
      initialRouteName={'Splash'}
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationTypeForReplace: 'pop',
      }}>
      <RootStack.Screen name="Splash" component={screenName.SplashScreen} />
      <RootStack.Screen name="Onboard" component={screenName.Onboard} />
      <RootStack.Screen name="Tab" component={TabStack} />


    </RootStack.Navigator>
  );
};

export default RootNavigator;
