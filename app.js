const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const upcomingShowsAPI = require('./server/routes/upcomingShows');

const mongoose = require('./server/db/mongoose');

//Middleware
app.use(express.json());
const port = process.env.PORT || 8081;

app.use('/api/upcomingshows', upcomingShowsAPI);

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(port, () => {
  console.log(`Listening from ${port}`);
});

module.exports = app;
