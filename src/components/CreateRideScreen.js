import React from 'react';
// import Map from './Map';
import { SafeAreaView, ScrollView } from 'react-native';
import { Button, Text, Form, Item, Input, Label } from 'native-base';
import createRideStyles from '../styles/CreateRideStyles';
import NumericInput from 'react-native-numeric-input'

export default function CreateRideScreen(){
  return (
    <SafeAreaView style={createRideStyles.container}>
      <ScrollView style={createRideStyles.scrollView}>
        <Text style={createRideStyles.title}>
          Create a ride
        </Text>
        <Form style={createRideStyles.form}>
          <Item>
            <Button><Text>Choose Pick up and Drop off locations</Text></Button>
          </Item>
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
          <Button><Text>Post Ride</Text></Button>
        </Form>

      </ScrollView>
  </SafeAreaView>
  )
}