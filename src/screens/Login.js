import React from 'react';

import {View, Text, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
const SignIn = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#0caf9a'}}>
      <ScrollView>
      <View
        style={{
          backgroundColor: '#fff',
          height: hp('100%'),
          width: wp('100%'),
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          top: '10%',
        }}>
        <Image
          style={styles.image}
          source={require('../assets/ME.png')}></Image>

        <Text style={styles.text}>
          Online Supermarket for all your daily needs. you are  {"\n"}just One Click
          away from all your needs at your door  {"\n"}step.
        </Text>
        <Text style={styles.logtext}>Login Account</Text>

        <View
          style={{
            height: hp('8%'),
            width: wp('95%'),
            justifyContent: 'center',
            alignSelf: 'center',
            marginVertical: 10,
            borderColor:"'#0caf9a'"
          }}>
          <TextInput
            style={styles.textinput}
            placeholder="Email address"
            placeholderTextColor={'black'}
          />
        </View>
        <View
          style={{
            height: hp('8%'),
            width: wp('95%'),
            justifyContent: 'center',
            alignSelf: 'center',
            marginVertical:15
          }}>
          <TextInput
            style={styles.textinput}
            placeholder="Password"
            placeholderTextColor={'black'}
          />
        </View>

        <Text style={styles.textfgt}>Forgot password? </Text>

        <View
          style={{
            height: hp('6%'),
            width: wp('90%'),
            backgroundColor: '#0caf9a',
            alignSelf: 'center',
            marginVertical: 15,
            borderRadius:8,
            justifyContent:'center'
          }}>
          <Text style={{alignSelf:'center',fontSize:17,color:"#fff"}} onPress={()=>{navigation.navigate('HomeScreen')}}> Sign in</Text>
        </View>
        <Text style={styles.text1}  onPress={()=>navigation.navigate('Register')}>If you are new, Create now </Text>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Text style={styles.text}>
          - - - - - - - - - - - - - 
        </Text>
        <Text style={styles.text2}>
        Or sign in with 
        </Text>
        <Text style={styles.text}>
          - - - - - - - - - - - - - 
        </Text></View>
       
        <Text style={styles.text}>Continue with Phone</Text>
        <Text style={styles.text}>Continue with Google</Text>

        <Text style={styles.text3}  onPress={()=>{navigation.navigate('Home')}}>Continue as guest</Text>
      </View></ScrollView>
    </View>
  );
};
export default SignIn;
const styles = StyleSheet.create({
  textinput: {
    height: hp('8%'),
    width: wp('90%'),
    borderColor: 'white',
    backgroundColor: '#eee',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius:8,
   
    borderColor:"#0caf9a",
    borderWidth:1
   
    
  },
  text: {
    color: '#eee',
    marginTop: 30,
    alignSelf: 'center',
    color: 'black',
  },
  logtext: {
    color: '#eee',
    marginTop: 30,
    marginHorizontal:20,
    color: 'black',
   
  },
  text2:{
    color: '#0caf9a',
    marginTop: 30,
    alignSelf: 'center',
    marginHorizontal:10 
  },
  textfgt: {
    color: 'black',
    textAlign: 'right',
    right: 20,
    top:'1%'
  },
  text1: {
    color: '#eee',

    alignSelf: 'center',
    color: 'black',
  },
  text3: {
    color: '#eee',
marginVertical:20,
    alignSelf: 'center',
    color: 'black',
    textDecorationLine:"underline"
  },

  button: {
    marginTop: 40,
    width: wp('80%'),
  },
  image: {
    height: 29,
    width: 160,
    marginTop: 40,
    marginHorizontal: 10,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,

    backgroundColor: 'green',
    color: 'black',
  },
});
