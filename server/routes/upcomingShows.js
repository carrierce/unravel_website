const express = require('express');
const router = express.Router();
const upcomingShowsController = require('../controllers/upcomingShowsController');

router.post('/', upcomingShowsController.postUpcomingShows);
router.get('/', upcomingShowsController.getUpcomingShows);
router.get('/:id', upcomingShowsController.getUpcomingShowById);
router.put('/:id', upcomingShowsController.updateUpcomingShowById);
router.delete('/:id', upcomingShowsController.deleteUpcomingShowById);

module.exports = router;
