import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from './context';
import { Users }  from '../data';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'


const SignInScreen = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [textInputChange, setTextInputChange] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const { signIn } = useContext(AuthContext);

  const handleEmailInputChange = (input) => {
    if(input.length != 0){
      setEmail(input);
      setTextInputChange(true);
    } else {
      setEmail(input);
      setTextInputChange(false);
    }
  }

  const handleLogin = (email, password) => {
    const foundUser = Users.filter(user => {
      return user.email == email && user.password == password
    });
    if (email.length == 0 || password.length == 0){
      Alert.alert('Invalid Input', 'Email or password field cannot be empty');
    }
    if(!foundUser){
      Alert.alert('Invalid User', 'Email or password is incorrect.', [
        {text: 'Okay'}
      ]);
      return
    }
    signIn(foundUser)
  }

  const handlePasswordInputChange = (input) => {
    setPassword(input);
  }

  const handleSecureTextEntryChange = () => {
    setSecureTextEntry(!secureTextEntry)
  }

  const handleValidEmail = (input) => {
    if(input.includes('@')){
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  }

  const handleValidPassword = (input) => {
    if(input.length >= 6 ){
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false)
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#352e5d' barStyle='light-content' />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome to SendIt!</Text>
        <Animatable.Image
              animation='bounceIn'
              duration={1500}
            source={require('../assets/images/logo.png')}
            style={styles.logo}
            resizeMode='stretch'
          />
      </View>
      <Animatable.View style={styles.footer} animation='fadeInUpBig'>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome
            name='user-o'
            color='#352e5d'
            size={20}
          />
          <TextInput
            placeholder='Email Address'
            style={styles.textInput}
            autoCapitalize='none'
            onEndEditing={(element) => handleValidEmail(element.nativeEvent.text)}
            onChangeText={(input) => handleEmailInputChange(input)}
          />
          { textInputChange ? 
            <Animatable.View animation='bounceIn'>
              <Feather
                name='check-circle'
                color='#ce3624'
                size={20}
              />
            </Animatable.View> : null }
        </View>
        { isValidEmail ? null : (
          <Animatable.View animation='fadeInLeft' duration={500}>
            <Text style={styles.errorMsg}>Email must be valid email address.</Text>
          </Animatable.View>
          )
        }

        <Text style={[styles.text_footer, {
          marginTop: 35
        }]}>Password</Text>
        <View style={styles.action}>
          <Feather
            name='lock'
            color='#352e5d'
            size={20}
          />
          <TextInput
            secureTextEntry={secureTextEntry ? true : false}
            placeholder='Password'
            style={styles.textInput}
            autoCapitalize='none'
            onChangeText={(input) => handlePasswordInputChange(input)}
            onEndEditing={(element) => handleValidPassword(element.nativeEvent.text)}
          />
          <TouchableOpacity onPress={handleSecureTextEntryChange}>
            { secureTextEntry ? 
              <Feather
                name='eye-off'
                color='#ce3624'
                size={20}
              /> : 
              <Feather
                name='eye'
                color='#ce3624'
                size={20}
              />
            }
          </TouchableOpacity>
        </View>
        { isValidPassword ? null : (
          <Animatable.View animation='fadeInLeft' duration={500}>
            <Text style={styles.errorMsg}>Password must be 6 characters long.</Text>
          </Animatable.View>
          )
        }

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {handleLogin(email, password)}}
          >
            <LinearGradient
              colors={['#352e5d', '#4d4678']}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, {color: '#fff'}]}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsValidEmail(true);
                setIsValidPassword(true);
                navigation.navigate('SignUpScreen');
              }}
              style={[styles.signIn, {
                borderColor: '#352e5d',
                borderWidth: 1,
                marginTop: 15
              }]}
            >
              <Text style={[styles.textSign, {
                color: '#352e5d'
              }]}>Create SendIt! Account</Text>
            </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const { height } = Dimensions.get('screen');
const height_logo = height * 0.11;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#352e5d'
  },
  header: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50,
      paddingTop: 14
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 28
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'center'
  },
  text_footer: {
      color: '#352e5d',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  logo: {
    top: 15,
    marginTop: 5,
    width: height_logo,
    height: height_logo
},
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});