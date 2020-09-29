import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Form, Item, Input, Label, DatePicker } from 'native-base';
import { Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import createRideStyles from '../styles/CreateRideStyles';
import NumericInput from 'react-native-numeric-input';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { postRide } from '../actions/rideActions';

export default function CreateRideScreen({navigation}){

  const pickUpLocation = useSelector(state => state.pickUpLocation);
  const dropOffLocation = useSelector(state => state.dropOffLocation);
  const [rideDate, setRideDate] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [seatsAvailable, setSeatsAvailable] = useState(1);
  const [pricePerSeat, setPricePerSeat] = useState(5);
  const [driver, setDriver] = useState('');
  const dispatch = useDispatch();

  useEffect(()=> {
    AsyncStorage.getItem('name')
      .then(driver => setDriver(driver))
  }, [])
  

  const handleCreateRide = () => {
    console.log(driver, pickUpLocation.otherInfo.address, dropOffLocation.otherInfo.address, rideDate, departureTime, seatsAvailable, pricePerSeat)
    const rideToCreate = {
      driver: driver,
      seatsAvailable: seatsAvailable,
      pricePerSeat: pricePerSeat,
      departureTime: departureTime,
      date: rideDate,
      pickUpLocation: {
        coordinates: {
          latitude: pickUpLocation.coordDetails.lat,
          longitude: pickUpLocation.coordDetails.lng
        },
        address: pickUpLocation.otherInfo.address
      },
      dropOffLocation: {
        coordinates: {
          latitude: dropOffLocation.coordDetails.lat,
          longitude: dropOffLocation.coordDetails.lng
        },
        address: dropOffLocation.otherInfo.address
      }
    }
    postRide(dispatch, rideToCreate, navigation);
  }

  return (
    <View style={createRideStyles.container}>
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
            <Label>Date (mm/dd/yyy):</Label>
            <Input onChangeText={setRideDate} />
          </Item>
          <Item stackedLabel style={createRideStyles.item}>
            <Label>Departure Time (hh:mm[am/pm]):</Label>
            <Input onChangeText={setDepartureTime}/>
          </Item>
          <Item style={createRideStyles.numericInputItem}>
            <Text style={createRideStyles.numericInputText}>Seats available:</Text>
            <NumericInput
              containerStyle={{marginRight: 25}}
              rounded
              minValue={0}
              maxValue={8}
              totalHeight={65}
              totalWidth={150}
              initValue={1}
              rightButtonBackgroundColor="#96dce3"
              leftButtonBackgroundColor="#96dce3"
              onChange={setSeatsAvailable}
              value={seatsAvailable}
            />
          </Item>
          <Item style={createRideStyles.numericInputItem}>
            <Text style={createRideStyles.numericInputText}>Price per seat:</Text>
            <NumericInput
              containerStyle={{marginRight: 25}}
              rounded
              minValue={0}
              maxValue={100}
              step={5}
              totalHeight={65}
              totalWidth={150}
              rightButtonBackgroundColor="#96dce3"
              leftButtonBackgroundColor="#96dce3"
              onChange={setPricePerSeat}
              value={pricePerSeat}
            />
          </Item>
          <View style={createRideStyles.button}>
            <TouchableOpacity
              style={createRideStyles.signIn}
              onPress={() => handleCreateRide()}
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
  </View>
  )
}