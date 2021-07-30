const bcrypt = require('bcrypt');
const WishHasher = require('./WishesModel.js');
const SALT_WORK_FACTOR = 10;

const db = {
  /**
   * Db stores wishes, input by the client, received via event emitted by smart contract
   * @param {string} wish -Bytes32
   */
  hashWish(wish) {
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
      bcrypt.hash(wish, salt, (error, hash) => {
        if (err) throw err;
        else {
          console.log('Password is hashing correctly', hash);
          const newWish = new WishHasher({
            wish: hash,
          });

          newWish.save((err, data) => {
            if (err) throw err;
            else {
              console.log('Wish saved to be hashed');
            }
          });
        }
      });
    });
  },
  /**
   * Deletes all wishes upon request from client
   */
  deleteAllWishes() {
    WishHasher.deleteMany({}, (err, data) => {
      if (err) throw err;
      else {
        console.log('Wishes drained', data);
      }
    });
  },

  /**
   * Upon initialization of app or a rerender of the index.js page in client folder,
   * client makes request to retrieve all wishes from db
   */
  getAllWishes(req, res, next) {
    WishHasher.find((err, data) => {
      if (err) throw err;
      else {
        res.locals.wishes = data;
        console.log('got all wishes', data)
      }
      next();
    });
  },
};

module.exports = db;
