const UpcomingShows = require('../models/UpComingShows');

exports.postUpcomingShows = (req, res) => {
  UpcomingShows.create(req.body, (err, post) => {
    if (err) {
      return err;
    }

    res.json(post);
  });
};

exports.getUpcomingShows = (req, res) => {
  UpcomingShows.find((err, upComingShowData) => {
    if (err) {
      return err;
    }
    res.json(upComingShowData);
  });
};

exports.getUpcomingShowById = (req, res) => {
  UpcomingShows.findOne({ _id: req.params.id }, (err, result) => {
    if (err) {
      return err;
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
        return err;
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
        return err;
      }
      res.json(result);
    }
  );
};
