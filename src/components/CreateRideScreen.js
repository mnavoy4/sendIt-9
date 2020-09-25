import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Button, Form, Item, Input, Label, DatePicker } from 'native-base';
import { Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import createRideStyles from '../styles/CreateRideStyles';
import NumericInput from 'react-native-numeric-input';
import { useSelector } from 'react-redux';
import store from '../store/store';
import DateTimePicker from '@react-native-community/datetimepicker';
import MapViewDirections from 'react-native-maps-directions';

export default function CreateRideScreen({navigation}){

  const pickUpLocation = useSelector(state => state.pickUpLocation);
  const dropOffLocation = useSelector(state => state.dropOffLocation);

  // console.log(pickUpLocation, dropOffLocation)
 
  return (
    <SafeAreaView style={createRideStyles.container}>
      <ScrollView style={createRideStyles.scrollView}>
        <Text style={createRideStyles.title}>
          Create a ride
        </Text>
        <Form style={createRideStyles.form}>
          <View style={createRideStyles.button}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Map')}
              style={createRideStyles.signIn}
            >
              <LinearGradient
                colors={['#352e5d', '#4d4678']}
                style={createRideStyles.signIn}
              >
                <Text style={[createRideStyles.textSign, {color: '#fff'}]}>Choose pick up and drop off locations</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <Item stackedLabel style={createRideStyles.item}>
            <Label >Pick up:</Label>
            <Input
              value={ pickUpLocation.otherInfo ? pickUpLocation.otherInfo.address : '' }
            />
          </Item>
          <Item stackedLabel style={createRideStyles.item}>
            <Label >Drop off:</Label>
            <Input
              value={ dropOffLocation.otherInfo ? dropOffLocation.otherInfo.address : ''}
            />
          </Item>
          <Item stackedLabel style={createRideStyles.item}>
            <Label>Date:</Label>
            <DatePicker
              maximumDate={new Date(2022, 1, 1)}
              modalTransparent={false}
              minimumDate={new Date()}
              animationType={'slide'}
              locale={'en'}
              
            />
          </Item>
          <Item stackedLabel style={createRideStyles.item}>
            <Label>Departure Time:</Label>
            <Input />
          </Item>
          <Item style={createRideStyles.numericInputItem}>
            <Text style={createRideStyles.numericInputText}>Seats available:</Text>
            <NumericInput
              containerStyle={{marginRight: 25}}
              rounded
              onChange={value => console.log(value)}
              minValue={0}
              maxValue={8}
              totalHeight={65}
              totalWidth={150}
              initValue={1}
              rightButtonBackgroundColor="rgba(206,54,23,0.9)"
              leftButtonBackgroundColor="rgba(206,54,23,0.9)"
            />
          </Item>
          <Item style={createRideStyles.numericInputItem}>
            <Text style={createRideStyles.numericInputText}>Price per seat:</Text>
            <NumericInput
              containerStyle={{marginRight: 25}}
              rounded
              onChange={value => console.log(value)}
              minValue={0}
              maxValue={100}
              step={5}
              totalHeight={65}
              totalWidth={150}
              rightButtonBackgroundColor="rgba(206,54,23,0.9)"
              leftButtonBackgroundColor="rgba(206,54,23,0.9)"
            />
          </Item>
          <View style={createRideStyles.button}>
            <TouchableOpacity
              style={createRideStyles.signIn}
              onPress={() => console.log('ride posted')}
            >
              <LinearGradient
                colors={['#352e5d', '#4d4678']}
                style={createRideStyles.signIn}
              >
                <Text style={[createRideStyles.textSign, {color: '#fff'}]}>Post Ride</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Form>

      </ScrollView>
  </SafeAreaView>
  )
}