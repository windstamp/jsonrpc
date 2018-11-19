// https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethgetblock

var Web3 = require('web3');

//var rpcUrl = "http://localhost:7545";
var rpcUrl = "http://192.168.60.12:7545";

const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);

console.log('Test web3.eth.estimateGas.')

var addressOfMyContract = '0x3270a9a43f430026c62572bc0c3b5951db1c77ef';
var dataOfsetValue = '0x5093dc7d000000000000000000000000000000000000000000000000000000000000000a';

 var result = web3.eth.call({
    from: web3.eth.coinbase,
    to: addressOfMyContract, 
    data: dataOfsetValue
 });
 console.log(result); // "0x0"
