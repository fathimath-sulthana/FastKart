import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTab from './src/navigation/BottomTab'
import StackNavigation from './src/navigation/StackNavigation'
const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
      {/* <BottomTab/> */}
    </NavigationContainer>
  )
}

export default App