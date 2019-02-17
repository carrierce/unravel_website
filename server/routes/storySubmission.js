const express = require('express');
const router = express.Router();
const storySubmissionController = require('../controllers/storySubmissionController');

router.post('/', storySubmissionController.postStorySubmission);
router.get('/', storySubmissionController.getStorySubmission);

module.exports = router;
