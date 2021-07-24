const express = require("express");
const app = express()
const path = require("path")
const {abi, address} = require('../contractData');
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


//get access to contract instance
const contractInstance = new web3.eth.Contract(abi, address)

contractInstance.events.WishMade({})
.on('data', event => console.log('EVENT EMITTED SERVER', event))
.on('change', event => console.log('EVENT EMITTED SERVER', event))


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
