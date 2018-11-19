// https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethgetblock

var Web3 = require('web3');

//var rpcUrl = "http://localhost:7545";
var rpcUrl = "http://192.168.60.12:7545";

const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);

console.log('Test web3.eth.sign.')

var address = web3.eth.coinbase;

// 需要先将 address 解锁
var result = web3.eth.sign(address,
   "0x9dd2c369a187b4e6b9c402f030e50743e619301ea62aa4c0737d4ef7e10a3d49"); // second argument is web3.sha3("xyz")
console.log(result); // "0xa96d8613439bdc8fd4b0221bb589e7c5130d4a3f51a324685554105f67af20264c90b1055239d0336ddbe37ea25989303f4a825fbc6d6121f396012feaea245401"

// result = result[2:];
// console.log('r: ', result[0:64]);
// console.log('s: ', result[64:128]);
// console.log('v: ', result[128:130]);
