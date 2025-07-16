// configs/config.js
const mongoose = require('mongoose');

const connect = () => {
  mongoose.connect('mongodb+srv://Saneha9988:2JrsYkANQcbWf6BV@cluster0.lp0seqg.mongodb.net/saneha?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
      console.log(' Database is connected');
    })
    .catch((err) => {
      console.error(' Error connecting to database:', err);
    });
};

module.exports = { connect };


