const express = require('express');
const router = express.Router();
const pastShowsController = require('../controllers/pastShowsController');

router.post('/', pastShowsController.postPastShow);
router.get('/', pastShowsController.getPastShows);
router.get('/:id', pastShowsController.getPastShowById);
router.put('/:id', pastShowsController.updatePastShowById);
router.delete('/:id', pastShowsController.deletePastShowById);

module.exports = router;
