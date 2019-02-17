const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const upcomingShowsAPI = require('./server/routes/upcomingShows');
const pastShowsAPI = require('./server/routes/pastShows');
const storySubmissionAPI = require('./server/routes/storySubmission');
const impactFormAPI = require('./server/routes/impactForm');

const mongoose = require('./server/db/mongoose');

//Middleware
app.use(express.json());
const port = process.env.PORT || 8081;

app.use('/api/upcomingshows', upcomingShowsAPI);
app.use('/api/pastshows', pastShowsAPI);
app.use('/api/storysubmission', storySubmissionAPI);
app.use('/api/impactform', impactFormAPI);

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(port, () => {
  console.log(`Listening from ${port}`);
});

module.exports = app;
