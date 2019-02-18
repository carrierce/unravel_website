const express = require('express');
const router = express.Router();
const podcastsController = require('../controllers/podcastsController');

router.post('/', podcastsController.postPodcast);
router.get('/', podcastsController.getPodcasts);
router.get('/:id', podcastsController.getPodcastsById);
router.put('/:id', podcastsController.updatePodcastsById);
router.delete('/:id', podcastsController.deletePodcastsById);

module.exports = router;
