const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: Boolean
});

userSchema.methods.generateAuthToken = function() {
  let expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);
  const token = jwt.sign(
    {
      _id: this._id,
      isAdmin: this.isAdmin,
      exp: parseInt(expiry.getTime() / 1000)
    },
    process.env.SECRET
  );
  return token;
};

module.exports = mongoose.model('User', userSchema);
