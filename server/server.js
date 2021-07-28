// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');

const app = express();
const PORT = 3001;
const Web3 = require('web3');
const db = require('./db/wishesController');

require('dotenv').config();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Max-Age', '1800');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH, OPTIONS');
  next();
});

const contractAddress = process.env.CONTRACT_ADDRESS;

/**
 * Access contract abi via the build folder after compiling contract
 */

const abi = [
  {
    anonymous: false,
    inputs: [],
    name: 'DrainWishes',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'wish',
        type: 'bytes32',
      },
    ],
    name: 'WishMade',
    type: 'event',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'bytes32',
        name: '_wish',
        type: 'bytes32',
      },
    ],
    name: 'hashWish',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'drainWishes',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

/**
 * Config settings for web3 provider (options)
 * Enables auto reconnection
 */

const options = {
  reconnect: {
    auto: true,
    delay: 5000, // ms
    maxAttempts: 30,
    onTimeout: false,
  },
};
/**
 * After importing Web3, establish connection with a web3 provider
 * (how web3 talks to the blockchain)
 * Then, get the deployed contract instance using the abi and contract
 * address (.env file)
 */

const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:7545', options));
const contractInstance = new web3.eth.Contract(abi, contractAddress);

/**
 * Enable websockets, on 'data', to listen for specific events emitted from our contract instance
 * Execute logic, according to event
 */

contractInstance.events.WishMade({})
  .on('data', (event) => {
    db.hashWish(event.returnValues.wish);
  })
  .on('error', (event) => console.log('Error with event listener', event));

contractInstance.events.DrainWishes({})
  .on('data', () => {
    db.deleteAllWishes();
  })
  .on('error', (event) => console.log('Error with event listener', event));

app.get('/getWishes', db.getAllWishes, (req, res) => {
  res.status(200).send(res.locals.wishes);
});

// GLOBAL ERROR HANDLER
app.use((err, req, res) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.status, errorObj.message);
  return res.status(errorObj.status).send(errorObj.message.err);
});

// RUN SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
