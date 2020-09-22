import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

const SignInScreen = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [textInputChange, setTextInputChange] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleEmailInputChange = (input) => {
    if(input.length != 0){
      setEmail(input);
      console.log(email)
      setTextInputChange(true);
    } else {
      setEmail(input);
      console.log(email)
      setTextInputChange(false);
    }
  }

  const handlePasswordInputChange = (input) => {
    setPassword(input);
  }

  const handleSecureTextEntryChange = () => {
    setSecureTextEntry(!secureTextEntry)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome to SendIt!</Text>
      </View>
      <View style={styles.footer}>
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
        <View style={styles.button}>
            <LinearGradient
              colors={['#352e5d', '#4d4678']}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, {color: '#fff'}]}>Sign In</Text>
            </LinearGradient>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUpScreen')}
              style={[styles.signIn, {
                borderColor: '#352e5d',
                borderWidth: 1,
                marginTop: 15
              }]}
            >
              <Text style={[styles.textSign, {
                color: '#352e5d'
              }]}>Sign Up</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#352e5d'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
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