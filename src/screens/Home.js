import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import HomeSearchBar from '../components/HomeSearchBar'
import TopContainer from '../components/TopContainer'

const Home = () => {
  return (
    <View>
     <Header/>
     <HomeSearchBar/>
     <TopContainer/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
