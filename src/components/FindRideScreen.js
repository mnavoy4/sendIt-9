import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, StatusBar, FlatList } from 'react-native';
import { Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector, connect } from 'react-redux';
import { listRides, getRideDetails } from '../actions/rideActions';
import { useIsFocused } from '@react-navigation/native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons'

const width = Dimensions.get('window').width;

function BrowseRidesScreen({navigation, route}){

  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const ridesList = useSelector(state => state.rides.rides);

  useEffect(() => {
    listRides(dispatch);
  }, [isFocused]);

  const handleRideDetailsClick = (id) => {
    getRideDetails(dispatch, id);
    navigation.navigate('Ride Details');
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#352e5d' barStyle='light-content' />
        <Text style={styles.title}>
          Available Rides
        </Text>
        <FlatList
          data={ridesList}
          extraData={ridesList}
          style={styles.list}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item._id}
              style={styles.item}
              onPress={() => handleRideDetailsClick(item._id)}
            >
              <LinearGradient

                colors={['#352e5d', '#96dce3']}
                style={styles.linearGradient}
                locations={[0.88, 1]}
              >
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.text}>
                    {/* <AntDesign
                      name="arrowup"
                      size={22}
                      color="#96dce3"
                    /> */}
                    {item.pickUpLocation.address.slice(0, -5)}
                  </Text>
                  { item.driver == 'Michael Navoy' ? (
                    <FontAwesome5
                      name='snowboarding'
                      color='#96dce3'
                      size={20}
                    />
                    ) : (
                    <FontAwesome5
                      name='skiing'
                      color='#96dce3'
                      size={20}
                    />
                    )
                  }
                </View>
                
                <View style={styles.viewToMoveUp}>
                  <AntDesign
                    name="arrowdown"
                    size={22}
                    color="#96dce3"
                  />
                  <Text style={styles.textDropoff}>
                    {item.dropOffLocation.address.slice(0, -5)}
                  </Text>
                  <Text style={styles.text}>{item.date}</Text>
                  <Text style={styles.text}>Driver: {item.driver}</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          )}
        />
  </View>
  )
}
function mapStateToProps(state){
  return {
    rides: state.rides.rides
  }
}

export default connect(mapStateToProps, null)(BrowseRidesScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  list: {
    width: width
  },
  viewToMoveUp: {
    bottom: 10
  },
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 0,
    width: width
  },
  item: {
    marginLeft: 10,
    marginTop: 12
  },
  text: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold'
  },
  textDropoff: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },
  textDriver: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },
  linearGradient: {
    width: '98%',
    height: 130,
    borderRadius: 8,
    padding: 12
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 25,
    color: '#352e5d'
  }
});