module.exports = {
  env: {
    CONTRACT_ABI: [
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
    ],
    CONTRACT_ADDRESS: '0x61CBC353EFF619990930aF457F1e4273c3f59A9E'
  },
}