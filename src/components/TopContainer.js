import { ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const TopContainer = () => {
  return (
    <View style={styles.container}>
     <ImageBackground   source={require('../assets/Jr.png')} style={{height:250,width:300, borderRadius:300}} >
      <Text style={styles.text1}>Farm Fresh Vegies</Text>
      <Text style={styles.text2}>Get instant delivery</Text>
      <Text style={styles.text3}>Shop Now</Text>
     </ImageBackground>
    </View>
  )
}

export default TopContainer

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    imageBackground:{
        height:250,
        width:300,
         borderRadius:300
    },
    text1:{
        color:'#444444',
        margin:50,
        padding:2,
        fontWeight:'600',
        fontSize:19,
        
    },
    text2:{
        color:'#747474',
        padding:20,
        fontSize:16,
       
    },
    text3:{
        color:'#444444'
    },
})