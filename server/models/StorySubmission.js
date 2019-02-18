const mongoose = require('mongoose');

const storySubmissionSchema = new mongoose.Schema({
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
  story: {
    type: String,
    required: true,
    minlength: 5
  },
  questionOrComment: {
    type: String,
    minlength: 5
  }
});

module.exports = mongoose.model('StorySubmission', storySubmissionSchema);
