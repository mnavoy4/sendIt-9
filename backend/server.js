const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const usersRouter = require('./routes/userRoutes');
const ridesRouter = require('./routes/rideRoutes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const mongoDbUrl = process.env.MONGODB_URL;
mongoose.connect(mongoDbUrl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connection made")
})
app.use('/rides', ridesRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
  console.log('server is listening on port', port)
})
