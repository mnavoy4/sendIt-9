import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from './context';

const SignInScreen = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [textInputChange, setTextInputChange] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [confirmSecureTextEntry, setConfirmSecureTextEntry] = useState(true);

  const { signUp } = useContext(AuthContext);

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

  const handleConfirmPasswordInputChange = (input) => {
    setConfirmPassword(input);
  }

  const handleSecureTextEntryChange = () => {
    setSecureTextEntry(!secureTextEntry)
  }

  const handleConfirmSecureTextEntryChange = () => {
    setConfirmSecureTextEntry(!confirmSecureTextEntry)
  }
  const handleSignUp = (email, password) => {
    signUp(email, password)
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#352e5d' barStyle='light-content' />
      <View style={styles.header}>
        <Text style={styles.text_header}>Create Account</Text>
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
        <Text style={[styles.text_footer, {
          marginTop: 35
        }]}>Confirm Password</Text>
        <View style={styles.action}>
          <Feather
            name='lock'
            color='#352e5d'
            size={20}
          />
          <TextInput
            secureTextEntry={confirmSecureTextEntry ? true : false}
            placeholder='Password'
            style={styles.textInput}
            autoCapitalize='none'
            onChangeText={(input) => handleConfirmPasswordInputChange(input)}
          />
          <TouchableOpacity onPress={handleConfirmSecureTextEntryChange}>
            { confirmSecureTextEntry ? 
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
          <TouchableOpacity
            style={styles.signIn}
            onPress={(email, password) => handleSignUp(email, password)}
          >
            <LinearGradient
              colors={['#352e5d', '#4d4678']}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, {color: '#fff'}]}>Create Account</Text>
            </LinearGradient>
          </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[styles.signIn, {
                borderColor: '#352e5d',
                borderWidth: 1,
                marginTop: 15
              }]}
            >
              <Text style={[styles.textSign, {
                color: '#352e5d'
              }]}>Back to Sign In</Text>
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
  logo: {
    top: 15,
    marginTop: 5,
    width: height_logo,
    height: height_logo
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