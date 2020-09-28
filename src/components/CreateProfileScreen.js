import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';

export default function CreateProfileScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar backgroundColor='#352e5d' barStyle='light-content' />
      <Text>Create Profile Screen</Text>
      <Button
        title='Fake button'
        onPress={() => console.log('fake button clicked')}
      />
    </View>
  );
}