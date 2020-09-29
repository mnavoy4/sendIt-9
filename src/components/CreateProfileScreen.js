import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from './context';
import { getEmailPasswordInfo } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { agesToSelect } from '../data';
import { createNewUser } from '../actions/userActions';
import axios from 'axios';
const usersURL = 'http://localhost:5000/users';

const CreateProfileScreen = ({navigation}) => {

  const [textInputChange, setTextInputChange] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(0);
  const [skiOrBoard, setSkiOrBoard] = useState('');
  const [foundUser, setFoundUser] = useState({});

  const [confirmSecureTextEntry, setConfirmSecureTextEntry] = useState(true);
  const dispatch = useDispatch();

  const { signUp } = useContext(AuthContext);

  const { email, password } = useSelector(state => state.emailPasswordInfo);

  // const handleEmailInputChange = (input) => {
  //   if(input.length != 0){
  //     console.log(email)
  //     setTextInputChange(true);
  //   } else {
  //     console.log(email)
  //     setTextInputChange(false);
  //   }
  // }

  const handleCreateAccountClick = (email, password) => {
    const foundUser = axios.get(`${usersURL}/email`)
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
  };

  const handleSecureTextEntryChange = () => {
    setSecureTextEntry(!secureTextEntry)
  }

  // const handleConfirmSecureTextEntryChange = () => {
  //   setConfirmSecureTextEntry(!confirmSecureTextEntry)
  // }

  const findUserToSignIn = async () => {
    const foundUser = await axios.get(`${usersURL}/${email}`)
    setFoundUser(foundUser.data)
  }

  const handleCreateUser = () => {
    const userToCreate = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      gender: gender,
      age: age,
      skiOrBoard: skiOrBoard
    }
    createNewUser(dispatch, userToCreate)
    // const foundUser = findUserToSignIn();
    // console.log('FIND ME', foundUser);
    // navigation.navigate('Find Ride');
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <StatusBar backgroundColor='#352e5d' barStyle='light-content' />
      <View style={styles.header}>
        <Text style={styles.text_header}>Profile Details</Text>
        {/* <Animatable.Image
              animation='bounceIn'
              duration={1500}
            source={require('../assets/images/logo.png')}
            style={styles.logo}
            resizeMode='stretch'
          /> */}
      </View>
      <Animatable.View style={styles.footer} animation='fadeInUpBig'>
        <Text style={styles.first_text_footer}>Email</Text>
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
            value={email}
          />
            <Animatable.View animation='bounceIn'>
              <Feather
                name='check-circle'
                color='#ce3624'
                size={20}
              />
            </Animatable.View>
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
            value={password}
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
        <Text style={styles.text_footer}>First Name</Text>
        <View style={styles.action}>
          <FontAwesome
            name='user-o'
            color='#352e5d'
            size={20}
          />
          <TextInput
            placeholder='First Name'
            style={styles.textInput}
            autoCapitalize='words'
            onChangeText={setFirstName}
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
        <Text style={styles.text_footer}>Last Name</Text>
        <View style={styles.action}>
          <FontAwesome
            name='user-o'
            color='#352e5d'
            size={20}
          />
          <TextInput
            placeholder='Last Name'
            style={styles.textInput}
            autoCapitalize='words'
            onChangeText={setLastName}
          />
        </View>
        <Text style={styles.text_footer}>Phone Number</Text>
        <View style={styles.action}>
          <FontAwesome
            name='phone'
            color='#352e5d'
            size={20}
          />
          <TextInput
            placeholder='XXX-XXX-XXXX'
            style={styles.textInput}
            autoCapitalize='none'
            onChangeText={setPhoneNumber}
          />
        </View>
        <Text style={styles.text_footer}>Gender</Text>
        <View style={styles.action}>
          <FontAwesome
            name='venus-mars'
            color='#352e5d'
            size={20}
            style={{marginRight: 8}}
          />
          <RNPickerSelect
            items={[
              { label: 'Male', value: 'Male' },
              { label: 'Female', value: 'Female' },
              { label: 'Choose not to identify', value: ' ' }
            ]}
            onValueChange={setGender}
          />
        </View>
        <Text style={styles.text_footer}>Age</Text>
        <View style={styles.action}>
          <RNPickerSelect
            items={agesToSelect}
            onValueChange={setAge}
          />
        </View>
        <Text style={styles.text_footer}>Ski or Snowboard?</Text>
        <View style={styles.action}>
          <MaterialCommunityIcons
            name='snowflake'
            color='#352e5d'
            size={20}
            style={{ marginRight: 8 }}
          />
          <RNPickerSelect
            items={[
              { label: 'Ski', value: "Ski" },
              { label: 'Snowboard', value: 'Snowboard' },
              { label: 'I can do both', value: 'Both' }
            ]}
            onValueChange={setSkiOrBoard}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => handleCreateUser()}
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
              }]}>Back to Create Account</Text>
            </TouchableOpacity>
        </View>
      </Animatable.View>
      </ScrollView>
    </View>
  );
};

export default CreateProfileScreen;

const { height, width } = Dimensions.get('screen');
const height_logo = height * 0.07;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#352e5d'
  },
  scrollView: {
    marginHorizontal: 0,
    width: width
  },
  logo: {
    top: 20,
    marginTop: 2,
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
      flex: 6,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      top: 35,
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#352e5d',
      fontSize: 18,
      marginTop: 35
  },
  first_text_footer: {
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
      marginTop: 40
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