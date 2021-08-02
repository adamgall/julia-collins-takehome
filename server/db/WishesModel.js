const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

/**
   * Establish local connection with mongodb and instantiate a
   * local 'wish-hasher' database
*/

const url = 'mongodb://127.0.0.1:27017/wish-hasher';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const database = mongoose.connection;

database.once('open', () => {
  console.log('Database connected:', url);
});

database.on('error', (err) => {
  console.error('connection error:', err);
});

const WishSchema = mongoose.Schema({
  wish: {
    type: String,
  },
});

const WishHasher = mongoose.model('Wish', WishSchema);

module.exports = WishHasher;
