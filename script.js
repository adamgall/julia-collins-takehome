// const Web3 = require('web3');
// const HashingWell = require('./build/contracts/HashingWell.json');
// //used VanityEth
// const address = '0xfa886e33263696589c9857bd59075A4C831FD2C7';
// const privateKey = '65e755e457e9516cdaf4ebccd29c29056bd984acf1c850928e766b09b69c1d27';

// const infuraUrl = 'https://rinkeby.infura.io/v3/aeb481bbd64a4f59a4e3a2d3d6f71c73'
// let hashingWell;
// const init = async () => {
//   const web3 = new Web3(infuraUrl);
//   //create web3 contract instance
//   const networkId = await web3.eth.net.getId();
//   hashingWell = new web3.eth.Contract(
//     HashingWell.abi,
//     HashingWell.networks[networkId].address
//   );
// }

// init();

// //contract address: 0x14A66eb65153Cac230826B3b1EBd0568C3ff7Cb4
// module.exports = hashingWell;