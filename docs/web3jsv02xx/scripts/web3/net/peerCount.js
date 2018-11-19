// https://github.com/ethereum/wiki/wiki/JavaScript-API

var Web3 = require('web3');

var rpcUrl = "http://localhost:7545";
// var rpcUrl = "http://localhost:8545";
// var rpcUrl = "http://l92.168.60.24:8501";
// var rpcUrl = "http://l92.168.60.24:8745";
// var rpcUrl = "http://localhost:8745";
// var rpcUrl = "http://l92.168.60.30:8102";

const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);

console.log('Test web3.net.peerCount');

var peerCount = web3.net.peerCount;
console.log(peerCount); // 4

// 异步调用
// TypeError: web3.eth.getPeerCount is not a function
// web3.eth.getPeerCount(function(error, result) {
//     if(!error) {
//         console.log('\nresult: ', result);
//         // console.log(JSON.stringify(result));
//     }
//     else {
//         console.error(error);
//     }
//  });
