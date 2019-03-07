const mongoose = require('mongoose');

const upcomingShowsSchema = new mongoose.Schema({
  posterImageLink: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  showDateTime: {
    type: Date,
    required: true,
    default: Date.now
  },
  venue: {
    type: String,
    required: true
  },
  showBlurb: {
    type: String
  },
  ticketUrl: {
    type: String,
    required: true
  },
  showTitle: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('UpcomingShows', upcomingShowsSchema);
