import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import HeaderOffer from '../components/headeroffer'
import SearchOffer from '../components/searchoffer'
import ContainerOffer from '../components/ContainerOffer'
import HeaderCart from '../components/headercart'
import ItemCart from '../components/ItemCart'

const Offers = () => {
  return (
    <ScrollView>
    <View style={{backgroundColor:"#fff",flex:1}}>
      <HeaderCart/>
      <ItemCart/>
    </View></ScrollView>
  )
}

export default Offers

const styles = StyleSheet.create({})