import React from 'react';

import {View, Text, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
const Register = ({navigation}) => {
  return (
    
    <View style={{flex: 1, backgroundColor: '#0caf9a'}}>
        
      <View
        style={{
          backgroundColor: '#fff',
         
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          top: '8%',
        }}>
            {/* <ScrollView style={{
            height: hp('100%'),
            width: wp('100%')}}> */}
        <Image
          style={styles.image}
          source={require('../assets/ME.png')}></Image>

        <Text style={styles.text}>
          Online Supermarket for all your daily needs. you are  {"\n"}just One Click
          away from all your needs at your door  {"\n"}step.
        </Text>
        <Text style={styles.logtext}>Register Account</Text>

        <View
          style={{
            height: hp('8%'),
            width: wp('95%'),
            justifyContent: 'center',
            alignSelf: 'center',
            marginVertical: 3,
           
          }}>
          <TextInput
            style={styles.textinput}
            placeholder="Full Name"
            placeholderTextColor={'black'}
          />
        </View>
        <View
          style={{
            height: hp('8%'),
            width: wp('95%'),
            justifyContent: 'center',
            alignSelf: 'center',
            marginVertical: 10,
            borderColor:"'#0caf9a'",
            flexDirection:'row'
          }}>
          <TextInput
            style={styles.textinput}
            placeholder="Email address"
            placeholderTextColor={'black'}>
            </TextInput>
  
            {/* <Icon name="call" size={25} color={"black"} style={{position:'absolute',right:10}}/> */}
          
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
          <Text style={{alignSelf:'center',fontSize:17,color:"#fff"}}> Sign Up</Text>
        </View>
        <Text style={styles.text1}onPress={() =>navigation.navigate('Login')}>Already have an Account? Sign In </Text>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Text style={styles.text}>
          - - - - - - - - - - - - - 
        </Text>
        <Text style={styles.text2}>
        Or sign up with 
        </Text>
        <Text style={styles.text}>
          - - - - - - - - - - - - - 
        </Text></View>
<ScrollView style={{
            height: hp('100%'),
            width: wp('100%')}}> 
        <Text style={styles.text}>Continue with Phone</Text>
        <Text style={styles.text}>Continue with Google</Text>
        <Text style={styles.text3}>Continue as guest</Text>
         </ScrollView> 
      </View>
    </View>
  );
};
export default Register;
const styles = StyleSheet.create({
  textinput: {
    height: hp('8%'),
    width: wp('95%'),
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    borderColor:"'#0caf9a'",
    flexDirection:'row',
    borderRadius:8,
    borderColor:"#0caf9a",
    borderWidth:1
    
  },
  text: {
    color: '#eee',
    marginTop: 18,
    alignSelf: 'center',
    color: 'black',
  },
  logtext: {
    color: '#eee',
    marginTop: 20,
    marginHorizontal:20,
    color: 'black',
   
  },
  text2:{
    color: '#0caf9a',
    marginTop: 20,
    alignSelf: 'center',
    marginHorizontal:10 
  },
  textfgt: {
    color: 'black',
    textAlign: 'right',
    right: 20,
    top:'0%'
  },
  text1: {
    color: '#eee',

    alignSelf: 'center',
    color: 'black',
  },
  text3: {
    color: '#eee',
marginVertical:14,
    alignSelf: 'center',
    color: 'black',
    textDecorationLine:"underline"
  },

 
  image: {
    height: 29,
    width: 160,
    marginTop: 20,
    marginHorizontal: 10,
  },
  
  input: {
    flex: 1,

    backgroundColor: 'green',
    color: 'black',
  },
});
