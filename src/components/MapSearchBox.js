import React from 'react';
import { Text } from 'react-native';
import { View, InputGroup, Input } from 'native-base';
import mapSearchBoxStyles from '../styles/MapSearchBoxStyles';
import store from '../store/store';
import { FontAwesome } from '@expo/vector-icons';
import { getSearchResults, toggleSearchResult, getAddressPredictions } from '../actions/mapActions' ;
import { useDispatch } from 'react-redux';


export default function MapSearchBox() {

  const dispatch = useDispatch()

  // const { selectedPickUp, selectedDropOff } = store.getState().selectedAddress.selectedAddress || {}

  function handleToggleSearchResult(payload){
    if (payload == "pickUp"){
      toggleSearchResult(dispatch, {
        resultType: {
          pickUp: true,
          dropOff: false
        }
      })
    }
    if (payload == 'dropOff') {
      toggleSearchResult(dispatch, {
        resultType: {
          pickUp: false,
          dropOff: true
        }
      })
    }
  }

  function handleInput(key, value){
    getSearchResults(dispatch, {
      inputData: {
        key,
        value: value
      }
    })
    // getAddressPredictions(dispatch);
  }
  return (
    <View style={mapSearchBoxStyles.searchBox}>
      <View style={mapSearchBoxStyles.inputWrapper}>
        <Text style={mapSearchBoxStyles.label}>PICK UP</Text>
        <InputGroup>
          <FontAwesome name='search' size={22} color='#ce3624' />
          <Input
            onFocus={() => handleToggleSearchResult('pickUp')}
            style={mapSearchBoxStyles.inputSearch}
            placeholder="Choose pick-up location"
            onChangeText={handleInput.bind(this, "pickUp")}
            // value={selectedPickUp && selectedPickUp.name}
          />
        </InputGroup>
      </View>
      <View style={mapSearchBoxStyles.secondInputWrapper}>
        <Text style={mapSearchBoxStyles.label}>DROP OFF</Text>
        <InputGroup>
          <FontAwesome name='search' size={22} color='#ce3624' />
          <Input
            onFocus={() => handleToggleSearchResult('dropOff')}
            style={mapSearchBoxStyles.inputSearch}
            placeholder="Choose drop-off location"
            onChangeText={handleInput.bind(this, 'dropOff')}
            // value={selectedDropOff && selectedDropOff.name}
          />
        </InputGroup>
      </View>
    </View>
  )
}