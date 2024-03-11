import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {verticalScale} from 'react-native-size-matters';
import {ICONS, screenName, SIZES, COLORS} from '../Constants';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray3,
        tabBarShowLabel: true,

        tabBarLabelStyle: {
          fontSize: SIZES.small,
        },

        tabBarStyle: {
          height: verticalScale(48),
          paddingVertical: 6,
          paddingBottom: 3,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <MaterialCommunityIcons
                name={ICONS.HOME}
                color={focused ? COLORS.primary : COLORS.gray3}
                size={SIZES.large}
              />
            </View>
          ),
        }}
        name="Home"
        component={screenName.Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <MaterialCommunityIcons
                name={ICONS.STETH}
                color={focused ? COLORS.primary : COLORS.gray3}
                size={SIZES.large}
              />
            </View>
          ),
        }}
        name="Explore"
        component={screenName.Statistics}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <MaterialCommunityIcons
                name={ICONS.LAB}
                color={focused ? COLORS.primary : COLORS.gray3}
                size={SIZES.large}
              />
            </View>
          ),
        }}
        name="Wallet"
        component={screenName.Wallet}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <MaterialCommunityIcons
                name={ICONS.USER}
                color={focused ? COLORS.primary : COLORS.gray3}
                size={SIZES.large}
              />
            </View>
          ),
        }}
        name="Profile"
        component={screenName.MyProfile}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
