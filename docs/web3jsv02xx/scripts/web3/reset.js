var Web3 = require('web3');

var rpcUrl = "http://localhost:7545";
// var rpcUrl = "http://localhost:8545";
// var rpcUrl = "http://l92.168.60.24:8501";
// var rpcUrl = "http://l92.168.60.24:8745";
// var rpcUrl = "http://localhost:8745";
// var rpcUrl = "http://l92.168.60.30:8102";

var web3 = new Web3(new Web3.providers.HttpProvider(rpcUrl));

console.log('Test reset()');

var result = web3.reset();
console.log('\nresult: ', result);
