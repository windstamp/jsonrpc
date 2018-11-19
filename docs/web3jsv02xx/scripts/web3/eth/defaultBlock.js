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

console.log('Test web3.eth.defaultBlock');

var defaultBlock = web3.eth.defaultBlock;
console.log(defaultBlock); // 'latest'
// set the default block
web3.eth.defaultBlock = 231;
var defaultBlock = web3.eth.defaultBlock;
console.log(defaultBlock); // 'latest'
