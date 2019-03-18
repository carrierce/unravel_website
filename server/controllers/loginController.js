const User = require('../models/User');

// exports is an object and we are making a variable for that
// therefore postUser is a Function Expression

exports.postUser = (req, res) => {
  const user = req.body;
  const dbUser = null;
  User.find({ userName: user.userName })
    .then(result => {
      dbUser = result;
      // put the logic here for checking if the password
    })
    .catch(err => {
      console.log(err);
      return;
    });
};
