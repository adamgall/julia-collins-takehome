const wishHasher = require('./WishesModel.js');
const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;



db = {
    hashWish(wish){
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      bcrypt.hash(wish, salt, function(err, hash) {
        console.log('PASSWORD IS HASHING', hash);
        });
    });
    let newWish = new wishHasher({
      wish
    });
    newWish.save((err, data) => {
      if(err) {
        console.log('error', err)
      }
      else {
        console.log('wish saved to be hashed')
      }
    })
  },
  deleteAllWishes(){
      try {
        wishHasher.wishes.deleteMany({})
        console.log('wishes drained');
      } catch(e) {
        console.log('error with deleteing wishes', e)
      }
  },
  getAllWishes(req, res, next) {
    wishHasher.find((err, data) => {
      if(err) {
        console.log('error', err)
      } else {
        res.locals.wishes = data;
      }
      next()
    })
  }
}

module.exports = db;

