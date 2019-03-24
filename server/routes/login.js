const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  const user = req.body;
  // const newUser = new User(user);
  // newUser.save(() => {
  //   console.log('saved');
  // });
  const dbUser = await User.find({ userName: user.userName });
  // User.find({ userName: user.userName }).then(result => {
  //   console.log(result);
  // });

  if (dbUser) {
    console.log(dbUser);
    // console.log(user.password);
    if (dbUser[0].password == user.password) {
      console.log('login User!');
    } else {
      console.log('wrong password');
    }
  }
});

module.exports = router;
