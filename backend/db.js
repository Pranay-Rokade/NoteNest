const mongoose = require('mongoose');
const mongoURI = 'mongodb://0.0.0.0:27017/';

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Connection error:', err);
  }
}

module.exports = connectToMongo;
