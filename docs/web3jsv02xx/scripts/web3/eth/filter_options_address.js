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
// var addressesList = addressOfFurnaceCoin + acc0 + acc1;
var addressesList = addressOfFurnaceCoin;
// var addressesList = acc0;
// var addressesList = acc1;

var filter_address = web3.eth.filter({
    address: addressesList
});

console.log('----- Test filter with options address -----');

filter_address.watch(function(error, result) {    
    console.log('\n----- filter_address.watch -----');
    console.log('addressesList: ', addressesList);

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
    filter_address.stopWatching();
});

filter_address.get(function(error, logs){  
    console.log('\n----- filter_address.get -----');
    console.log('addressesList: ', addressesList);

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
