// https://github.com/ethereum/wiki/wiki/JavaScript-API

var Web3 = require('web3');

//var rpcUrl = "http://localhost:7545";
var rpcUrl = "http://192.168.60.12:7545";

const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);

var addressOfFurnaceCoin = "0xbefd2d3f950f0e948bd0bef1f03f84636185c09c";

var accounts = web3.eth.accounts;
var acc0;
var acc1;
if (accounts.length > 0)
    acc0 = web3.eth.accounts[0];
if (accounts.length > 1)
    acc1 = web3.eth.accounts[1];
//var addressesList = [addressOfFurnaceCoin, acc0, acc1];
var addressesList = addressOfFurnaceCoin;

var topic1 = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';  // 函数签名（还不知道怎么具体计算？），32字节
var topic2 = '0x0000000000000000000000001d31f7400ee8c6d4079d8dd9687d61bd28356610';  // address: 0x1d31f7400ee8c6d4079d8dd9687d61bd28356610，20字节地址左边补充0为32字节
var topic3 = '0x0000000000000000000000008846acfbca6cdb0e6c10ccb536b343361a26fe40';  // address: 0x8846acfbca6cdb0e6c10ccb536b343361a26fe40，20字节地址左边补充0为32字节
var topicsList = [topic1, topic2, topic3];

// HEX String - an integer block number
// String "earliest" for the earliest/genesis block
// String "latest" - for the latest mined block
// String "pending" - for the pending state/transactions
var filter = web3.eth.filter({
    fromBlock: 'latest',
    toBlock: 'latest',
    address: addressesList,
    topics: topicsList
});

console.log('----- Test filter with options topics -----');

filter.watch(function(error, result) {    
    console.log('\n----- filter_options -----');

    if (error) {
        console.log('error: ', error)
        return;
    }

    // console.log('result: ', result);
    console.log('log info {')
    console.log('\tlogIndex: ', result.logIndex);
    console.log('\ttransactionHash: ', result.transactionHash);
    console.log('\ttransactionIndex: ', result.transactionIndex);
    console.log('\tblockHash: ', result.blockHash);
    console.log('\tblockNumber: ', result.blockNumber);
    console.log('\taddress: ', result.address);
    console.log('\tdata: ', result.data);
    console.log('\ttype: ', result.type);

    console.log('\ttopics:')
    result.topics.forEach(function(topic, i){
        console.log('\t\ttopics[', i, ']', topic);
    });

    console.log('}');

    // 停止监听
    console.log('----- stop watching -----');
    filter.stopWatching();
});

var filter = web3.eth.filter({
    fromBlock: 'earliest',
    toBlock: 'latest',
    address: addressesList,
    topics: topicsList
});
filter.get(function(error, logs){  
    console.log('\n----- filter.get -----');
    // console.log('topic1: ', topic1);
    // console.log('topic2: ', topic2);
    // console.log('topic3: ', topic3);

    if (error) {
        console.log('error: ', error)
        return;
    }

    // console.log('result: ', logs);
    console.log('logs [');
    logs.forEach(function(log, i) {
            console.log('\tlog[', i, '] {');
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
    console.log(']');
});
