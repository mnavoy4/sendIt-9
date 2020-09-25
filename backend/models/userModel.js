const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true, dropDups: true },
  password: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  skiOrBoard: { type: String, required: true },
  driverRating: { type: Number },
  riderRating: { type: Number },
  ridesPosted: { type: Array, default: [] },
  ridesTaken: { type: Array, default: [] }
});
const userModel = mongoose.model("User", userSchema)

module.exports = userModel;