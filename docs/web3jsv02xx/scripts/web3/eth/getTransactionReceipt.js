// https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethgetblock

var Web3 = require('web3');

//var rpcUrl = "http://localhost:7545";
var rpcUrl = "http://192.168.60.12:7545";

const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);

console.log('Test web3.eth.getTransactionReceipt.')

// HEX String - an integer block number
// String "earliest" for the earliest/genesis block
// String "latest" - for the latest mined block
// String "pending" - for the pending state/transactions
var txHash = '0xf5279553dc5c34ad9213c40bec4525e26a0e32f7e651cea6715892793c0c2dbb';

var result = web3.eth.getTransactionReceipt(txHash);
// console.log('\nresult: ', result);
console.log('blockHash: ', result.blockHash);
console.log('blockNumber: ', result.blockNumber);
console.log('transactionHash: ', result.transactionHash);
console.log('transactionIndex: ', result.transactionIndex);
console.log('from: ', result.from);
console.log('to: ', result.to);
console.log('cumulativeGasUsed: ', result.cumulativeGasUsed);
console.log('gasUsed: ', result.gasUsed);
console.log('contractAddress: ', result.contractAddress);
console.log('logs {');
result.logs.forEach(function(log, i) {
    console.log('\tlog [', i, '] {')
    console.log('\t\tlogIndex: ', log.logIndex);
    console.log('\t\ttransactionHash: ', log.transactionHash);
    console.log('\t\ttransactionIndex: ', log.transactionIndex);
    console.log('\t\tblockHash: ', log.blockHash);
    console.log('\t\tblockNumber: ', log.blockNumber);
    console.log('\t\taddress: ', log.address);
    console.log('\t\tdata: ', log.data);
    console.log('\t\ttype: ', log.type);

    console.log('\t\ttopics:')
    log.topics.forEach(function(topic, i){
        console.log('\t\t\ttopics[', i, ']', topic);
    });

    console.log('\t}');
});
console.log('}');
console.log('status: ', result.status);
