// https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethgetblock

var Web3 = require('web3');

//var rpcUrl = "http://localhost:7545";
var rpcUrl = "http://192.168.60.12:7545";

const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);

console.log('Test web3.eth.getTransaction.')

// HEX String - an integer block number
// String "earliest" for the earliest/genesis block
// String "latest" - for the latest mined block
// String "pending" - for the pending state/transactions
var txHash = '0xdbe389d13143cd4d650ce43647c9cf56b525e17bf70d7717d3dd95885b0c17d6';

var result = web3.eth.getTransaction(txHash);
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
