var Web3 = require('web3');

var rpcUrl = "http://localhost:7545";
// var rpcUrl = "http://localhost:8545";
// var rpcUrl = "http://l92.168.60.24:8501";
// var rpcUrl = "http://l92.168.60.24:8745";
// var rpcUrl = "http://localhost:8745";
// var rpcUrl = "http://l92.168.60.30:8102";

console.log('Test setProvier')

web3 = new Web3();
web3.setProvider(new Web3.providers.HttpProvider(rpcUrl));

console.log('\nweb3: ', web3);
console.log('\ncoinbase: ', web3.eth.coinbase);
