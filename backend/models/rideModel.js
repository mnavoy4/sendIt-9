const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  driver: { type: String, required: true },
  seatsAvailable: { type: Number, required: true, default: 1 },
  pricePerSeat: { type: Number, required: true },
  departureTime: { type: String, required: true },
  date: { type: String, required: true },
  pickUpLocation: {
    coordinates: {
      latitude: { type: String, required: true },
      longitude: { type: String, required: true }
    },
    address: { type: String, required: true }
  },
  dropOffLocation: {
    coordinates: {
      latitude: { type: String, required: true },
      longitude: { type: String, required: true }
    },
    address: { type: String, required: true }
  }
});
const rideModel = mongoose.model("Ride", rideSchema)

module.exports = rideModel;