# SendIt!
___
A ride-sharing app specifically for ski/snowboarding trips to the mountains.

Alt-H Guide
___
  1.  Basic Info
  2.  Demo
  3.  Supporting Technologies
  4.  Install and Setup
  5.  Features
  6.  Status
  7.  Contact
  8.  License

### 1. Basic Info
___
SendIt! is a community based ride-sharing app for ski/snowboarding trips to the mountains. A user can post a ride saying they have x amount of open seats in their car and how much they are charging per seat. Other users can browse these available rides and claim spots in their car in order to meet new people to snowboard/ski with, reduce traffic on the way to the mountains, and reduce emissions by vehicles taken off of the road.

### 2. Demo
___
youtube link

### 3.  Supporting Technologies
___

- NodeJS
- Express
- React Native
- Redux
- MongoDB

### 4.  Install and Setup
___
To run SendIt!, clone it from the GitHub repository and install locally.

Run commands in backend:
```
npm install
nodemon server

```
Run commands in frontend:
```
npm install
expo start

```

### 5. Features
___

  - Create new User profile
  - Browse all rides
  - Post ride

  ___
  ``` 
  const postRide = (dispatch, ride, navigation) => {
  axios.post(`${ridesURL}/add`, ride)
    .then(response => {
      dispatch({ type: POST_RIDE, payload: response.data })
      navigation.navigate('Find Ride', {ride: response.data})
    })
  };

  ```
  <Provider store={store}>
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        { 
          loginState.userToken != null ? (
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
              <Drawer.Screen name="SupportScreen" component={SupportScreen} />
              <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
              <Drawer.Screen name='Map' component={MapStackScreen} />
              <Drawer.Screen name='Ride Details' component={RideDetailsStackScreen} />
            </Drawer.Navigator>
        )
        :
          <RootStackScreen />
        }
      </NavigationContainer>
    </AuthContext.Provider>
  </Provider>

  ```
  ```
  <GooglePlacesAutocomplete
    query={{
      key: "AIzaSyCUapq6jDSDYvPZGlFmubHd6UeEs_EPh3Y",
      language: "en",
    }}
    onPress={(data, details = null) => {
      handleGetPickUpLocation(details.geometry.location, {
        address: details.formatted_address,
        placeId: details.place_id
      });
    }}
    placeholder='Choose pick up location'
    enableHighAccuracyLocation={true}
    onFail={(error) => console.error(error)}
    fetchDetails={true}
    listViewDisplayed="true"
    styles={{
      container: {
        position: 'absolute',
        justifyContent: 'center',
        marginTop: 6,
      },
      listView: {
        position: 'absolute',
        height: autoCompleteHeight,
        width: width,
        top: 150,
        backgroundColor: '#fff',
      },
      textInputContainer: {
        position: 'absolute',
        backgroundColor: "rgba(100,100,0,1)",
        opacity: 0.9,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        marginLeft: 10,
        top: 10,
        width: width * 0.95,
        alignItems: 'center',
      },
      textInput: {
        marginLeft: 0,
        marginRight: 0,
        width: width,
        height: 58,
        color: "#5d5d5d",
        fontSize: 16,
      },
      predefinedPlacesDescription: {
        color: "#1faadb",
      },
    }}
  />

  ```
  ___

  ###  6.  Status
___

  Current status:  Functional MVP completed
  
  To-do's:

  - [x] Create Ride
  - [x] Browse Rides
  - [x] Sign In
  - [x] Create User
  - [ ] Search/Filter Rides
  - [ ] Weather Reports for Destinations

  ### 7.  Contact
  ___
  SendIt! was created by [Michael Navoy](https://www.linkedin.com/in/michael-navoy/).
  
  ### 8. Licence
  ___
  [Click here to view](insert license)