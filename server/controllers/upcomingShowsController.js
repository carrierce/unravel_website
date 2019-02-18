const UpcomingShows = require('../models/UpComingShows');

exports.postUpcomingShows = (req, res) => {
  UpcomingShows.create(req.body, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }

    res.json(result);
  });
};

exports.getUpcomingShows = (req, res) => {
  UpcomingShows.find((err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json(result);
  });
};

exports.getUpcomingShowById = (req, res) => {
  UpcomingShows.findOne({ _id: req.params.id }, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json(result);
  });
};

exports.updateUpcomingShowById = (req, res) => {
  UpcomingShows.findOneAndUpdate(
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

exports.deleteUpcomingShowById = (req, res) => {
  UpcomingShows.findOneAndRemove(
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
