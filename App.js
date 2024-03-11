import { View, Text,LogBox } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './Src/Navigation/RootNavigator';



const App = () => {
  LogBox.ignoreAllLogs();

  return (
   
    <NavigationContainer>
    <RootNavigator/>
    </NavigationContainer>
   
  )
}

export default App