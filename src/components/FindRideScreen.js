import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Button, Form, Item, Input, Label, DatePicker } from 'native-base';
import { Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function BrowseRidesScreen({navigation}){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title='Fake button'
        onPress={() => console.log('fake button clicked')}
      />
    </View>
  )
  
}