import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Button, Form, Item, Input, Label, DatePicker } from 'native-base';
import { Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import createRideStyles from '../styles/CreateRideStyles';
import NumericInput from 'react-native-numeric-input';
import store from '../store/store';

export default function CreateRideScreen({navigation}){

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
          <Item stackedLabel>
            <Label >Pick up:</Label>
            <Input value={store.getState().pickUpLocation.otherInfo.address} />
          </Item>
          <Item stackedLabel>
            <Label >Drop off:</Label>
            <Input value={store.getState().dropOffLocation.otherInfo.address} />
          </Item>
          <Item stackedLabel>
            <Label>Date:</Label>
            <DatePicker
              maximumDate={new Date(2022, 1, 1)}
              modalTransparent={false}
              minimumDate={new Date()}
              animationType={'slide'}
              locale={'en'}
            />

          </Item>
          <Item stackedLabel>
            <Label>Departure Time:</Label>
            <Input />
          </Item>
          <Item style={createRideStyles.numericInputItem}>
            <Text>Seats available:</Text>
            <NumericInput
              rounded
              onChange={value => console.log(value)}
              minValue={0}
              maxValue={8}
              totalHeight={65}
              totalWidth={150}
              initValue={1}
            />
          </Item>
          <Item style={createRideStyles.numericInputItem}>
            <Text>Price per seat:</Text>
            <NumericInput
              rounded
              onChange={value => console.log(value)}
              minValue={0}
              maxValue={100}
              step={5}
              totalHeight={65}
              totalWidth={150}
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