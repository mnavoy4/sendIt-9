import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const RideDetailsScreen = ({navigation}) => {
  const rideDetails = useSelector(state => state.rideDetails);
  console.log('FIND MMMEEEEEEE', rideDetails);
    return (
      <View style={styles.container}>
        <Text>RideDetailsScreen </Text>
        <Button
          title="Go back"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
};

export default RideDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});