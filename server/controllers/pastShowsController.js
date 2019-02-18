const PastShows = require('../models/PastShows');

exports.postPastShow = (req, res) => {
  PastShows.create(req.body, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }

    res.json(result);
  });
};

exports.getPastShows = (req, res) => {
  PastShows.find((err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json(result);
  });
};

exports.getPastShowById = (req, res) => {
  PastShows.findOne({ _id: req.params.id }, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json(result);
  });
};

exports.updatePastShowById = (req, res) => {
  PastShows.findOneAndUpdate(
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

exports.deletePastShowById = (req, res) => {
  PastShows.findOneAndRemove(
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
