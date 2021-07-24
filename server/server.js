const express = require("express");
const app = express()
const path = require("path")
const PORT = 3333;
// const db = require('../server/controllers/wishController.js')
const Web3 = require('web3');
const HashingWell = require('../build/contracts/HashingWell.json');
//used VanityEth
// const address = '0xfa886e33263696589c9857bd59075A4C831FD2C7';
// const privateKey = '65e755e457e9516cdaf4ebccd29c29056bd984acf1c850928e766b09b69c1d27';

const infuraUrl = 'https://rinkeby.infura.io/v3/aeb481bbd64a4f59a4e3a2d3d6f71c73'
const web3 = new Web3(infuraUrl);

//contract address: 0x14A66eb65153Cac230826B3b1EBd0568C3ff7Cb4

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "*")
  res.header("Access-Control-Allow-Methods", "*")
  next();
});

const abi = [
  {
    "anonymous": false,
    "inputs": [],
    "name": "DrainWishes",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "wish",
        "type": "bytes32"
      }
    ],
    "name": "WishMade",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_wish",
        "type": "bytes32"
      }
    ],
    "name": "hashWish",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "drainWishes",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

//get access to contract instance
const contractInstance = new web3.eth.Contract(abi,'0x5b5d0F765Dd32A56969596B3EfEf06150ebeCDc9')

contractInstance.events.WishMade({})
.on('data', event => console.log('EVENT EMITTED SERVER', event))

// console.log(contractInstance)

// let eventWish = contractInstance.events.WishMade()
// eventWish.watch((err, res) => {
//   if(err){
//     console.log('Error with retreiving even data', err)
//   } else {
//     console.log(res); // event response
//     //use bcrypt to hash 
//     // const cryptedWish = bcrypt.hashSync(res, SALT_WORK_FACTOR)
//     // //store in database to be later called to database
//     // let newWish = new WishHasher({
//     //   wish
//     // });
//     // newWish.save((err, data) => {
//     //   if(err) {
//     //     res.status(400)
//     //     next(err);
//     //   }
//     //   else {
//     //     console.log('saving wish to be hashed')
//     //     res.status(200).send(res)
//     //   }
//     // })
//   }    
//     event.stopWatching() // Stop watching for the event once you've done what you wanted to do.
// });

// app.use(express.static(path.join(__dirname, '../assets/')));   


// app.post('/hashWish', db.hashWish, (req, res) => {
//   console.log('SUCCESS', res.locals.wish)
//   res.status(200).send(res.locals.wish)
// })

// // GLOBAL ERROR HANDLER
// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 500,
//     message: { err: 'An error occurred' },
//   };
//   const errorObj = Object.assign({}, defaultErr, err);
//   console.log(errorObj.status, errorObj.message);
//   return res.status(errorObj.status).send(errorObj.message.err);
// });

// RUN SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
