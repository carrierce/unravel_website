const express = require('express');
const router = express.Router();
const impactFormController = require('../controllers/impactFormController');

router.post('/', impactFormController.postImpactForm);
router.get('/', impactFormController.getImpactForm);

module.exports = router;
