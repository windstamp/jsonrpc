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

console.log('Test toWei()');

var address = "0x8888f1f195afa192cfee860698584c030f4c9db1";

var isAddress = web3.isAddress(address);
console.log(isAddress); // true

var isChecksumAddress = web3.isChecksumAddress(address);
console.log(isChecksumAddress); // false
