const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const podcastsAPI = require('./server/routes/podcasts');
const storySubmissionAPI = require('./server/routes/storySubmission');
const impactFormAPI = require('./server/routes/impactForm');
const upcomingShowsAPI = require('./server/routes/upcomingShows');
const pastShowsAPI = require('./server/routes/pastShows');
const cors = require('cors');
const path = require('path');
const mongoose = require('./server/db/mongoose');

//Middleware
app.use(cors());
app.use(express.json());
const port = process.env.BACKEND_PORT || 5000;

app.use('/api/upcomingshows', upcomingShowsAPI);
app.use('/api/pastshows', pastShowsAPI);
app.use('/api/podcasts', podcastsAPI);
app.use('/api/storysubmission', storySubmissionAPI);
app.use('/api/impactform', impactFormAPI);

// Uncomment the 2 lines below when running build
// Also remember to look at localhost:5000/
// app.use(express.static(path.join(__dirname, 'build')));
// app.use('*', express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(port, () => {
  console.log(`Listening from ${port}`);
});

module.exports = app;
