const mongoose = require('mongoose');

const impactFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  organization: {
    type: String,
    required: true,
    minlength: 5
  },
  message: {
    type: String,
    minlength: 5
  }
});

module.exports = mongoose.model('ImpactForm', impactFormSchema);
