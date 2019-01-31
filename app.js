const express = require('express');
const dotenv = require('dotenv').config();
const app = express();

app.use(express.json());
const port = process.env.PORT || 8081;

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(port, () => {
  console.log(`Listening from ${port}`);
});

module.exports = app;
