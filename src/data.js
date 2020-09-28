const Users = [
  {
    id: 1,
    email: 'mnavoy4@gmail.com',
    password: 'password',
    userToken: 'token',
    name: 'Michael Navoy'
  },
  {
    id: 2,
    email: 'email@email.com',
    password: 'password1',
    userToken: 'token',
    name: 'Perry Martin'
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

const agesToSelect = [
  { label: '18', value: 18 },
  { label: '19', value: 19 },
  { label: '20', value: 20 },
  { label: '21', value: 21 },
  { label: '22', value: 22 },
  { label: '23', value: 23 },
  { label: '24', value: 24 },
  { label: '25', value: 25 },
  { label: '26', value: 26 },
  { label: '27', value: 27 },
  { label: '28', value: 28 },
  { label: '29', value: 29 },
  { label: '30', value: 30 },
  { label: '31', value: 31 },
  { label: '32', value: 32 },
  { label: '33', value: 33 },
  { label: '34', value: 34 },
  { label: '35', value: 35 },
  { label: '36', value: 36 },
  { label: '37', value: 37 },
  { label: '38', value: 38 },
  { label: '39', value: 39 },
  { label: '40', value: 40 },
  { label: '41', value: 41 },
  { label: '42', value: 42 },
  { label: '43', value: 43 },
  { label: '44', value: 44 },
  { label: '45', value: 45 },
  { label: '46', value: 46 },
  { label: '47', value: 47 },
  { label: '48', value: 48 },
  { label: '49', value: 49 },
  { label: '50', value: 50 },
  { label: '51', value: 51 },
  { label: '52', value: 52 },
  { label: '53', value: 53 },
  { label: '54', value: 54 },
  { label: '55', value: 55 },
  { label: '56', value: 56 },
  { label: '57', value: 57 },
  { label: '58', value: 58 },
  { label: '59', value: 59 },
  { label: '60', value: 60 },
  { label: '61', value: 61 },
  { label: '62', value: 62 },
  { label: '63', value: 63 },
  { label: '63', value: 63 },
  { label: '64', value: 64 },
  { label: '65', value: 65 },
]

export { Users, Rides, agesToSelect }