const Podcasts = require('../models/Podcasts');

exports.postPodcast = (req, res) => {
  Podcasts.create(req.body, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json(result);
  });
};

exports.getPodcasts = (req, res) => {
  Podcasts.find((err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json(result);
  });
};

exports.getPodcastsById = (req, res) => {
  Podcasts.findOne({ _id: req.params.id }, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json(result);
  });
};

exports.updatePodcastsById = (req, res) => {
  Podcasts.findOneAndUpdate({ _id: req.params.id }, req.body, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json(result);
  });
};

exports.deletePodcastsById = (req, res) => {
  Podcasts.findOneAndRemove({ _id: req.params.id }, req.body, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json(result);
  });
};
