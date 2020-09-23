import React from 'react';
// import Map from './Map';
import { SafeAreaView, ScrollView } from 'react-native';
import { Button, Form, Item, Input, Label } from 'native-base';
import { Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import createRideStyles from '../styles/CreateRideStyles';
import NumericInput from 'react-native-numeric-input';

export default function CreateRideScreen(){
  return (
    <SafeAreaView style={createRideStyles.container}>
      <ScrollView style={createRideStyles.scrollView}>
        <Text style={createRideStyles.title}>
          Create a ride
        </Text>
        <Form style={createRideStyles.form}>
          <View style={createRideStyles.button}>
            <TouchableOpacity
              onPress={() => console.log('pressed')}
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
            <Input />
          </Item>
          <Item stackedLabel>
            <Label >Drop off:</Label>
            <Input />
          </Item>
          <Item style={createRideStyles.numericInputItem}>
            <Text>Seats available:</Text>
            <NumericInput
              onChange={value => console.log(value)}
              minValue={0}
              maxValue={8}
            />
          </Item>
          <Item style={createRideStyles.numericInputItem}>
            <Text>Price per seat:</Text>
            <NumericInput
              onChange={value => console.log(value)}
              minValue={0}
              maxValue={100}
              step={5}
              totalHeight={75}
            />
          </Item>
          <View style={createRideStyles.button}>
            <TouchableOpacity
              style={createRideStyles.signIn}
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