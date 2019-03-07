const StorySubmission = require('../models/StorySubmission');

exports.postStorySubmission = (req, res) => {
  StorySubmission.create(req.body, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }

    res.json(result);
  });
};

exports.getStorySubmission = (req, res) => {
  StorySubmission.find((err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json(result);
  });
};

exports.getStorySubmissionById = (req, res) => {
  StorySubmission.findOne({ _id: req.params.id }, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json(result);
  });
};

exports.deleteStorySubmissionById = (req, res) => {
  StorySubmission.findOneAndRemove(
    { _id: req.params.id },
    req.body,
    (err, result) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.json(result);
    }
  );
};

exports.updateStorySubmissionById = (req, res) => {
  StorySubmission.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    (err, result) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.json(result);
    }
  );
};
