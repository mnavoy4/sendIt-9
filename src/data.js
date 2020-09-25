const Users = [
  {
    id: 1,
    email: 'mnavoy4@gmail.com',
    password: 'password',
    userToken: 'token'
  },
  {
    id: 2,
    email: 'email@email.com',
    password: 'password1',
    userToken: 'token'
  }
];

const Rides = [
  {
    id: 11, 
    driver: 'Michael Navoy',
    passengers: 3,
    pricePerSeat: 10,
    seatsAvailable: 1,
    car: {
      make: 'Cheverlet',
      model: 'Trailblazer',
      color: 'Gold'
    },
    pickUpLocation: {
      coords: {
        lat: '123.653456',
        long: '123.432'
      },
      address: 'Keystone, CO'
    },
    dropOffLocation: {
      coords: {
        lat: '98.341',
        long: '80.261'
      },
      address: 'Broomfield, CO'
    },
    date: "09/24/2020",
    time: '12:30pm',
    duration: '1:23',
    distance: 80
  },
  {
    id: 21,
    driver: 'Perry Martin',
    passengers: 3,
    seatsAvailable: 1,
    pricePerSeat: 15,
    car: {
      make: 'Jeep',
      model: 'IDK',
      color: 'Silver'
    },
    pickUpLocation: {
      coords: {
        lat: '12.1234',
        long: '87.36812'
      },
      address: 'Littleton, CO'
    },
    dropOffLocation: {
      coords: {
        lat: '12.534',
        long: '8172.3452'
      },
      address: 'Aspen, CO'
    },
    date: "09/24/2020",
    time: '12:30pm',
    duration: '1:23',
    distance: 80
  },
  {
    id: 31,
    driver: 'Pelin Cetin',
    passengers: 1,
    seatsAvailable: 2,
    pricePerSeat: 20,
    car: {
      make: 'Jeep',
      model: '2 door?',
      color: 'Black'
    },
    pickUpLocation: {
      coords: {
        lat: '-172.9127',
        long: '28.654'
      },
      address: 'Breckenridge, CO'
    },
    dropOffLocation: {
      coords: {
        lat: '30.1234',
        long: '-127.3472'
      },
      address: 'Denver, CO'
    },
    date: "09/24/2020",
    time: '12:30pm',
    duration: '1:23',
    distance: 80
  },
]

export { Users, Rides }