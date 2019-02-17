const mongoose = require('mongoose');

const podcastsSchema = new mongoose.Schema({
  podcastCoverImageLink: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  podcastName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  podcastBlurb: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  podcastShowNotes: {
    type: String,
    minlength: 5
  },
  podcastCoverImageLink: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  }
});

module.exports = mongoose.model('Podcasts', podcastsSchema);
