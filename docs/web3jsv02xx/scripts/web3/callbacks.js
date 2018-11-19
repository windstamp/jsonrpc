var Web3 = require('web3');
var web3 = new Web3();

var rpcUrl = "http://localhost:7545";
// var rpcUrl = "http://localhost:8545";
// var rpcUrl = "http://l92.168.60.24:8501";
// var rpcUrl = "http://l92.168.60.24:8745";
// var rpcUrl = "http://localhost:8745";
// var rpcUrl = "http://l92.168.60.30:8102";

web3.setProvider(new web3.providers.HttpProvider(rpcUrl));

console.log('Test callback.')

// 同步调用
result = web3.eth.getBlock(3);
console.log('\nresult: ', result);
// console.log('result: ', JSON.stringify(result));

console.log('\n1111111');

// 异步调用
web3.eth.getBlock(2, function(error, result) {
    if(!error) {
        console.log('\nresult: ', result);
        // console.log(JSON.stringify(result));
    }
    else {
        console.error(error);
    }
 });
