var Web3 = require('web3');
var web3 = new Web3();

var rpcUrl = "http://localhost:7545";
// var rpcUrl = "http://localhost:8545";
// var rpcUrl = "http://l92.168.60.24:8501";
// var rpcUrl = "http://l92.168.60.24:8745";
// var rpcUrl = "http://localhost:8745";
// var rpcUrl = "http://l92.168.60.30:8102";

web3.setProvider(new web3.providers.HttpProvider(rpcUrl));

console.log('Test web3.eth.gasPrice.')

var result = web3.eth.gasPrice;
console.log(result.toNumber()); // true

// 异步调用
web3.eth.getGasPrice(function(error, result) {
    if(!error) {
        console.log('\nresult: ', result.toNumber());
    }
    else {
        console.error(error);
    }
 });
