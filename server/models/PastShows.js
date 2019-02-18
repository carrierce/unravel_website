const mongoose = require('mongoose');

const pastShowsSchema = new mongoose.Schema({
  photoImageLink: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  showDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  venue: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('PastShows', pastShowsSchema);
