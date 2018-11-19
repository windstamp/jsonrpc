// https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethgetblock

var Web3 = require('web3');

//var rpcUrl = "http://localhost:7545";
var rpcUrl = "http://192.168.60.12:7545";

const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);

console.log('Test getBlock.')

// HEX String - an integer block number
// String "earliest" for the earliest/genesis block
// String "latest" - for the latest mined block
// String "pending" - for the pending state/transactions
var blockNumber = 2;
var blockHash = '0x5e82d527cd1b6a262d59a6ac284620f2632c5a31e04eb0787d2a3b2f8d6c3aa8';

var result = web3.eth.getBlockTransactionCount(blockNumber);
console.log('\nresult: ', result);

var result = web3.eth.getBlockTransactionCount(blockHash);
console.log('\nresult: ', result);

web3.eth.getBlockTransactionCount(blockNumber, function(error, result) {
    if (error) {
        console.error(error);
        return;
    }

    console.log('\nresult: ', result);
});

web3.eth.getBlockTransactionCount(blockHash, function(error, result) {
    if (error) {
        console.error(error);
        return;
    }

    console.log('\nresult: ', result);
});
