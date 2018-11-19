// https://github.com/ethereum/wiki/wiki/JavaScript-API

var Web3 = require('web3');

//var rpcUrl = "http://localhost:7545";
var rpcUrl = "http://192.168.60.12:7545";

const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);

// address: 0x1d31f7400ee8c6d4079d8dd9687d61bd28356610，20字节地址左边补充0为32字节
var address = '0x0000000000000000000000001d31f7400ee8c6d4079d8dd9687d61bd28356610';

console.log('----- Test filter with options topics -----');

// 测试地址topic
var filter_options_address_func = function(address) {
    var options_address = {topic : [address]};
    var filter_options_address = web3.eth.filter(options_address);
    filter_options_address.watch(function(error, result) {    
        console.log('\n----- filter_options_address -----');
        console.log('address: ', address);
    
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
    });
}

filter_options_address_func(address);
