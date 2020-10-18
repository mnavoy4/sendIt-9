import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { Form, Item, Input, Label, DatePicker, Row } from 'native-base';
import { useSelector } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import { agesToSelect } from '../data';
import { LinearGradient } from 'expo-linear-gradient';


const ProfileScreen = () => {

  const signedInUser = useSelector(state => state.signInUser);
  const [isDisabled, setIsDisabled] = useState(true);
  const { age, email, firstName, lastName, password, gender, phoneNumber, skiOrBoard, ridesPosted, ridesTaken } = signedInUser
  const [localFirstName, setLocalFirstName] = useState(firstName);
  const [localLastName, setLocalLastName] = useState(lastName);
  const [localPhoneNumber, setLocalPhoneNumber] = useState(phoneNumber);
  const [localGender, setLocalGender] = useState(gender);
  const [localEmail, setLocalEmail] = useState(email);
  const [localAge, setLocalAge] = useState(age);
  const [localSkiOrBoard, setLocalSkiOrBoard] = useState(skiOrBoard);



  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>
          Profile
        </Text>
        <Form style={styles.form}>
          <Item disabled stackedLabel style={styles.item}>
            <Label>First Name: </Label>
            <Input
              value={localFirstName}
              disabled={isDisabled}
              onChangeText={setLocalFirstName}
            />
          </Item>
          <Item disabled stackedLabel style={styles.item}>
            <Label>Last Name: </Label>
            <Input
              value={localLastName}
              disabled={isDisabled}
              onChangeText={setLocalLastName}
            />
          </Item>
          <Item disabled stackedLabel style={styles.item}>
            <Label>Email: </Label>
            <Input
              value={localEmail}
              disabled={isDisabled}
              onChangeText={setLocalEmail}
            />
          </Item>
          <Item disabled stackedLabel style={styles.item}>
            <Label>Phone Number: </Label>
            <Input
              value={localPhoneNumber}
              disabled={isDisabled}
              onChangeText={setLocalPhoneNumber}
            />
          </Item>
          <Item disabled stackedLabel style={styles.item}>
            <Label style={{marginBottom: 15}}>Age: </Label>
            <RNPickerSelect
              value={localAge}
              items={agesToSelect}
              onValueChange={setLocalAge}
              disabled={isDisabled}
              style={{inputIOS: {fontSize: 16}}}
            />
          </Item>
          <Item disabled stackedLabel style={styles.item}>
            <Label style={{marginBottom: 15}}>Gender: </Label>
            <RNPickerSelect
              disabled={isDisabled}
              style={{inputIOS: {fontSize: 16}}}
              value={localGender}
              items={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
                { label: 'Choose not to identify', value: ' ' }
              ]}
              onValueChange={setLocalGender}
            />
          </Item>
          <Item disabled stackedLabel style={styles.item}>
            <Label style={{marginBottom: 15}}>Ski Or Snowboard: </Label>
            <RNPickerSelect
              disabled={isDisabled}
              style={{inputIOS: {fontSize: 16}}}
              value={localSkiOrBoard}
              items={[
                { label: 'Ski', value: "Ski" },
                { label: 'Snowboard', value: 'Snowboard' },
                { label: 'I can do both', value: 'Both' }
              ]}
              onValueChange={setLocalSkiOrBoard}
            />
          </Item>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => setIsDisabled(!isDisabled)}
            >
              <LinearGradient
                colors={['#352e5d', '#4d4678']}
                style={styles.signIn}
              >
                {isDisabled ? 
                  <Text style={[styles.textSign, {color: '#fff'}]}>Edit Profile</Text> : 
                  <Text style={[styles.textSign, {color: '#fff'}]}>Confirm Changes</Text>
                }
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Form>
      </ScrollView>
    </View>
  )
};

export default ProfileScreen;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10
  },
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 0,
    width: width
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    color: '#352e5d'
  },
  signIn: {
    width: '95%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  item: {
    marginRight: 15
  },
  form: {
    backgroundColor: '#fff'
  }
});