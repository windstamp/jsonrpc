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

var block = web3.eth.getBlock(blockNumber);
console.log('\nTest get block by number with only transaction hash.');
// console.log('block: ', block);
console.log('block {');
console.log('\tnumber', block.number);
console.log('\thash', block.hash);
console.log('\tparentHash', block.parentHash);
console.log('\tnonce', block.nonce);
console.log('\tmixHash', block.mixHash);
console.log('\tsha3Uncles', block.sha3Uncles);
console.log('\tlogsBloom', block.logsBloom);
console.log('\ttransactionsRoot', block.transactionsRoot);
console.log('\tstateRoot', block.stateRoot);
console.log('\treceiptsRoot', block.receiptsRoot);
console.log('\tminer', block.miner);
console.log('\tdifficulty', block.difficulty);
console.log('\ttotalDifficulty', block.totalDifficulty);
console.log('\textraData', block.extraData);
console.log('\tsize', block.size);
console.log('\tgasLimit', block.gasLimit);
console.log('\tgasUsed', block.gasUsed);
console.log('\ttimestamp', block.timestamp);
console.log('\ttransactions [');
block.transactions.forEach(function(transaction, i){
console.log('\t\t', i, ': ', transaction);
});
console.log('\t]');
console.log('\tuncles [');
block.uncles.forEach(function(uncle, i){
console.log('\t\t', i, ': ', uncle);
});
console.log('\t]');
console.log('}');

var block = web3.eth.getBlock(blockNumber, true);
console.log('\nTest get block by number with detail transaction.');
// console.log('block: ', block);
console.log('block {');
console.log('\tnumber', block.number);
console.log('\thash', block.hash);
console.log('\tnonce', block.nonce);
console.log('\tmixHash', block.mixHash);
console.log('\tparentHash', block.parentHash);
console.log('\tsha3Uncles', block.sha3Uncles);
console.log('\tlogsBloom', block.logsBloom);
console.log('\ttransactionsRoot', block.transactionsRoot);
console.log('\tstateRoot', block.stateRoot);
console.log('\treceiptsRoot', block.receiptsRoot);
console.log('\tminer', block.miner);
console.log('\tdifficulty', block.difficulty);
console.log('\ttotalDifficulty', block.totalDifficulty);
console.log('\textraData', block.extraData);
console.log('\tsize', block.size);
console.log('\tgasLimit', block.gasLimit);
console.log('\tgasUsed', block.gasUsed);
console.log('\ttimestamp', block.timestamp);
console.log('\ttransactions [');
block.transactions.forEach(function(transaction, i){
console.log('\t\t', i, ': {');
console.log('\t\t\thash: ', transaction.hash);
console.log('\t\t\tnonce: ', transaction.nonce);
console.log('\t\t\tblockHash: ', transaction.blockHash);
console.log('\t\t\tblockNumber: ', transaction.blockNumber);
console.log('\t\t\ttransactionIndex: ', transaction.transactionIndex);
console.log('\t\t\tfrom: ', transaction.from);
console.log('\t\t\tto: ', transaction.to);
console.log('\t\t\tvalue: ', transaction.value);
console.log('\t\t\tgas: ', transaction.gas);
console.log('\t\t\tgasPrice: ', transaction.gasPrice);
console.log('\t\t\tinput: ', transaction.input);
console.log('\t\t}')
});
console.log('\t]');
console.log('\tuncles [');
block.uncles.forEach(function(uncle, i){
console.log('\t\t', i, ': ', uncle);
});
console.log('\t]');
console.log('}');

var block = web3.eth.getBlock(blockHash);
console.log('\nTest get block by hash with only transaction hash.');
// console.log('block: ', block);
console.log('block {');
console.log('\tnumber', block.number);
console.log('\thash', block.hash);
console.log('\tparentHash', block.parentHash);
console.log('\tnonce', block.nonce);
console.log('\tmixHash', block.mixHash);
console.log('\tsha3Uncles', block.sha3Uncles);
console.log('\tlogsBloom', block.logsBloom);
console.log('\ttransactionsRoot', block.transactionsRoot);
console.log('\tstateRoot', block.stateRoot);
console.log('\treceiptsRoot', block.receiptsRoot);
console.log('\tminer', block.miner);
console.log('\tdifficulty', block.difficulty);
console.log('\ttotalDifficulty', block.totalDifficulty);
console.log('\textraData', block.extraData);
console.log('\tsize', block.size);
console.log('\tgasLimit', block.gasLimit);
console.log('\tgasUsed', block.gasUsed);
console.log('\ttimestamp', block.timestamp);
console.log('\ttransactions [');
block.transactions.forEach(function(transaction, i){
console.log('\t\t', i, ': ', transaction);
});
console.log('\t]');
console.log('\tuncles [');
block.uncles.forEach(function(uncle, i){
console.log('\t\t', i, ': ', uncle);
});
console.log('\t]');
console.log('}');

var block = web3.eth.getBlock(blockHash, true);
console.log('\nTest get block by hash with detail transaction.');
// console.log('block: ', block);
console.log('block {');
console.log('\tnumber', block.number);
console.log('\thash', block.hash);
console.log('\tnonce', block.nonce);
console.log('\tmixHash', block.mixHash);
console.log('\tparentHash', block.parentHash);
console.log('\tsha3Uncles', block.sha3Uncles);
console.log('\tlogsBloom', block.logsBloom);
console.log('\ttransactionsRoot', block.transactionsRoot);
console.log('\tstateRoot', block.stateRoot);
console.log('\treceiptsRoot', block.receiptsRoot);
console.log('\tminer', block.miner);
console.log('\tdifficulty', block.difficulty);
console.log('\ttotalDifficulty', block.totalDifficulty);
console.log('\textraData', block.extraData);
console.log('\tsize', block.size);
console.log('\tgasLimit', block.gasLimit);
console.log('\tgasUsed', block.gasUsed);
console.log('\ttimestamp', block.timestamp);
console.log('\ttransactions [');
block.transactions.forEach(function(transaction, i){
console.log('\t\t', i, ': {');
console.log('\t\t\thash: ', transaction.hash);
console.log('\t\t\tnonce: ', transaction.nonce);
console.log('\t\t\tblockHash: ', transaction.blockHash);
console.log('\t\t\tblockNumber: ', transaction.blockNumber);
console.log('\t\t\ttransactionIndex: ', transaction.transactionIndex);
console.log('\t\t\tfrom: ', transaction.from);
console.log('\t\t\tto: ', transaction.to);
console.log('\t\t\tvalue: ', transaction.value);
console.log('\t\t\tgas: ', transaction.gas);
console.log('\t\t\tgasPrice: ', transaction.gasPrice);
console.log('\t\t\tinput: ', transaction.input);
console.log('\t\t}')
});
console.log('\t]');
console.log('\tuncles [');
block.uncles.forEach(function(uncle, i){
console.log('\t\t', i, ': ', uncle);
});
console.log('\t]');
console.log('}');
