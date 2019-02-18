const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const impactFormAPI = require('./server/routes/impactForm');

const mongoose = require('./server/db/mongoose');

//Middleware
app.use(express.json());
const port = process.env.PORT || 8081;

app.use('/api/impactform', impactFormAPI);

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(port, () => {
  console.log(`Listening from ${port}`);
});

module.exports = app;
