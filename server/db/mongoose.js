// below we are looking for someting in the nodemodules folder.
const mongoose = require('mongoose');

// below we are connecting to the server, setting the uri of mongoose, making a promise to check if we
// connect successfully.
mongoose
  .connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true })
  .then(() => {
    console.log('connected to mongoDB');
  })
  .catch(err => {
    console.log(err);
  });

module.exports = mongoose;
