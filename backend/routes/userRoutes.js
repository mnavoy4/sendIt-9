const router = require('express').Router();
let User = require('../models/userModel');

router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(error => res.status(400).json('Error: ' + error))
})

router.post('/add', (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    gender: req.body.gender,
    age: req.body.age,
    skiOrBoard: req.body.skiOrBoard
  })
  newUser.save()
    .then((user) => res.json(user))
    .catch((error) => res.status(400).json('Error: ' + error))
})

router.get('/:email', (req, res) => {
  User.findOne({ email: req.params.email })
    .then(user => res.json(user))
    .catch(error => res.status(400).json('Error: ' + error))
});

router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User Deleted'))
    .catch(error => res.status(400).json('Error: ' + error))
})

router.post('/update/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.email = req.body.email;
      user.password = req.body.password;
      user.phoneNumber = req.body.phoneNumber;
      user.gender = req.body.gender;
      user.age = req.body.age;
      user.skiOrBoard = req.body.skiOrBoard;

      user.save()
        .then(updatedUser => res.json(updatedUser))
        .catch(error => res.status(400).json('Error: ' + error))
    })
    .catch(error => res.status(400).json('Error: ' + error))
});

router.post('/signin', async (req, res) => {
  const signInUser = await User.findOne({
    email: req.body.email,
    password: req.body.password
  });
  if (signInUser){ 
    res.send({
      _id: signInUser.id,
      firstName: signInUser.firstName,
      lastName: signInUser.lastName,
      email: signInUser.email
      // token: getToken(signInUser)
    })
  } else {
    res.status(401).send({ message: 'Invalid Email or Password' })
  }
})

module.exports = router;
