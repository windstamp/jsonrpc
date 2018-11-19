// https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethgetblock

var Web3 = require('web3');

//var rpcUrl = "http://localhost:7545";
var rpcUrl = "http://192.168.60.12:7545";

const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);

console.log('Test web3.eth.getTransactionFromBlock.')

// HEX String - an integer block number
// String "earliest" for the earliest/genesis block
// String "latest" - for the latest mined block
// String "pending" - for the pending state/transactions
var blockNumber = 2;
var blockHash = '0x5e82d527cd1b6a262d59a6ac284620f2632c5a31e04eb0787d2a3b2f8d6c3aa8';
var txHash = '0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b';

var result = web3.eth.getTransactionFromBlock(blockHash, 0);
// console.log('\nresult: ', result);
console.log('hash: ', result.hash);
console.log('nonce: ', result.nonce);
console.log('blockHash: ', result.blockHash);
console.log('blockNumber: ', result.blockNumber);
console.log('transactionIndex: ', result.transactionIndex);
console.log('from: ', result.from);
console.log('to: ', result.to);
console.log('value: ', result.value.toNumber());
console.log('gas: ', result.gas);
console.log('gasPrice: ', result.gasPrice.toNumber());
console.log('input: ', result.input);
