const express = require('express');
const router = express.Router();
const storySubmissionController = require('../controllers/storySubmissionController');

router.post('/', storySubmissionController.postStorySubmission);
router.get('/', storySubmissionController.getStorySubmission);
router.get('/:id', storySubmissionController.getStorySubmissionById);
router.delete('/:id', storySubmissionController.deleteStorySubmissionById);
router.put('/:id', storySubmissionController.updateStorySubmissionById);

module.exports = router;
