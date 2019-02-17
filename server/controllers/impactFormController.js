const ImpactForm = require('../models/ImpactForm');

exports.postImpactForm = (req, res) => {
  ImpactForm.create(req.body, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }

    res.json(result);
  });
};

exports.getImpactForm = (req, res) => {
  ImpactForm.find((err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json(result);
  });
};
