const express = require('express');
const router = express.Router();
const impactFormController = require('../controllers/impactFormController');

router.post('/', impactFormController.postImpactForm);
router.get('/', impactFormController.getImpactForm);
router.get('/:id', impactFormController.getImpactFormsById);
router.put('/:id', impactFormController.updateImpactFormsById);
router.delete('/:id', impactFormController.deleteImpactFormsById);

module.exports = router;
