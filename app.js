const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const podcastsAPI = require('./server/routes/podcasts');

const mongoose = require('./server/db/mongoose');

//Middleware
app.use(express.json());
const port = process.env.PORT || 8081;

app.use('/api/podcasts', podcastsAPI);

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(port, () => {
  console.log(`Listening from ${port}`);
});

module.exports = app;
