const router = require('express').Router();
let Ride = require('../models/rideModel');

router.get('/', (req, res) => {
  Ride.find()
    .then(rides => res.json(rides))
    .catch(error => res.status(400).json('Error: ' + error))
})

router.post('/add', (req, res) => {
  //find signed in user with token
    // driver: `${signedInUser.firstName} ${signedInUser.lastName}`,

  const newRide = new Ride({
    driver: req.body.driver,
    seatsAvailable: req.body.seatsAvailable,
    pricePerSeat: req.body.pricePerSeat,
    departureTime: req.body.departureTime,
    date: req.body.date,
    pickUpLocation: {
      coordinates: {
        latitude: req.body.pickUpLocation.coordinates.latitude,
        longitude: req.body.pickUpLocation.coordinates.longitude
      },
      address: req.body.pickUpLocation.address
    },
    dropOffLocation: {
      coordinates: {
        latitude: req.body.dropOffLocation.coordinates.latitude,
        longitude: req.body.dropOffLocation.coordinates.longitude
      },
      address: req.body.dropOffLocation.address
    }
  })
  newRide.save()
    .then((ride) => res.json(ride))
    .catch((error) => res.status(400).json('Error: ' + error))
});

router.get('/:id', (req, res) => {
  Ride.findById(req.params.id)
    .then(ride => res.json(ride))
    .catch(error => res.status(400).json('Error: ' + error))
});

router.delete('/:id', (req, res) => {
  Ride.findByIdAndDelete(req.params.id)
    .then(() => res.json('Ride Deleted'))
    .catch(error => res.status(400).json('Error: ' + error))
})

router.post('/update/:id', (req, res) => {
  Ride.findById(req.params.id)
    .then(ride => {
      ride.driver = req.body.driver;
      ride.seatsAvailable = req.body.seatsAvailable;
      ride.pricePerSeat = req.body.pricePerSeat;
      ride.departureTime = req.body.departureTime;
      ride.date = req.body.date;
      ride.pickUpLocation = {
        coordinates: {
          latitude: req.body.pickUpLocation.coordinates.latitude,
          longitude: req.body.pickUpLocation.coordinates.longitude
        },
        address: req.body.pickUpLocation.address
      };
      dropOffLocation = {
        coordinates: {
          latitude: req.body.dropOffLocation.coordinates.latitude,
          longitude: req.body.dropOffLocation.coordinates.longitude
        },
        address: req.body.dropOffLocation.address
      };
      ride.save()
        .then(updatedRide => res.json(updatedRide))
        .catch(error => res.status(400).json('Error: ' + error))
    })
    .catch(error => res.status(400).json('Error: ' + error))
});

module.exports = router