import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Register from '../screens/Register'
import Login from '../screens/Login'
import BottomTab from './BottomTab'
import SplashScreen from '../screens/SplashScreen'
const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
   <Stack.Navigator initialRouteName='SplashScreen'>
    <Stack.Screen name='SplashScreen' component={SplashScreen} options={{
        headerShown:false
    }}/>
    <Stack.Screen name='Login' component={Login} options={{
        headerShown:false
    }}/>
    <Stack.Screen name='Register' component={Register} options={{
        headerShown:false
    }}/>
    <Stack.Screen name='HomeScreen' component={BottomTab} options={{
        headerShown:false
    }}/>
   </Stack.Navigator>
  )
}

export default StackNavigation