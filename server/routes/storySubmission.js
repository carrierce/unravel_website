const express = require('express');
const router = express.Router();
const storySubmissionController = require('../controllers/storySubmissionController');

router.post('/', storySubmissionController.postStorySubmission);
router.get('/', storySubmissionController.getStorySubmission);
router.get('/:id', storySubmissionController.getStorySubmissionById);

module.exports = router;
