const mongoose = require('mongoose');

require('dotenv').config();

const uri = process.env.MONGO_URI || '';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database: WishHasher');
});

const WishSchema = mongoose.Schema({
  wish: {
    type: String,
  },
});

const WishHasher = mongoose.model('wish', WishSchema);

module.exports = WishHasher;
