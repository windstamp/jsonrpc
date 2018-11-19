// https://github.com/ethereum/wiki/wiki/JavaScript-API

var Web3 = require('web3');

//var rpcUrl = "http://localhost:7545";
var rpcUrl = "http://192.168.60.12:7545";

const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);

var funcSigner = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';

console.log('----- Test filter with options topics -----');

// 测试函数签名topic
var options_func_signer = {topics : [funcSigner]};
var filter_options_func_signer = web3.eth.filter(options_func_signer);
filter_options_func_signer.watch(function(error, result) {    
    console.log('\n----- filter_options_func_signer -----');
    console.log('funcSigner: ', funcSigner);

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
