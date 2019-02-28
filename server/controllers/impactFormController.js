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

exports.getImpactFormsById = (req, res) => {
  ImpactForm.findOne({ _id: req.params.id }, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json(result);
  });
};

exports.updateImpactFormsById = (req, res) => {
  ImpactForm.findOneAndUpdate(
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

exports.deleteImpactFormsById = (req, res) => {
  ImpactForm.findOneAndRemove(
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
