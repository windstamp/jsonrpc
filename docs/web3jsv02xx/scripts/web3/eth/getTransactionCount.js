// https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethgetblock

var Web3 = require('web3');

//var rpcUrl = "http://localhost:7545";
var rpcUrl = "http://192.168.60.12:7545";

const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);

console.log('Test web3.eth.getTransactionCount.')

// HEX String - an integer block number
// String "earliest" for the earliest/genesis block
// String "latest" - for the latest mined block
// String "pending" - for the pending state/transactions
var address = web3.eth.coinbase;

var result = web3.eth.getTransactionCount(address);
console.log('\nresult: ', result);
