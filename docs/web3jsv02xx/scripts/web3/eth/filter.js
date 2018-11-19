// https://github.com/ethereum/wiki/wiki/JavaScript-API

var Web3 = require('web3');

//var rpcUrl = "http://localhost:7545";
var rpcUrl = "http://192.168.60.12:7545";

const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);

// 测试 filter

// 监听最后一个区块 latest
var filter_latest = web3.eth.filter('latest');
filter_latest.watch(function(error, result){
    console.log('----- filter_latest -----');

    if (error) {
        console.log('error: ', error)
        return;
    }

    console.log('result: ', result);
})

// 或者监听待挖的区块 pending
var filter_pending = web3.eth.filter('pending');
filter_pending.watch(function(error, result){
    console.log('----- filter_pending -----');
    
    if (error) {
        console.log('error: ', error)
        return;
    }

    console.log('result: ', result);
})
