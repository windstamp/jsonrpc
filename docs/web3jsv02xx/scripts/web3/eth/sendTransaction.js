// https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethgetblock

var Web3 = require('web3');

//var rpcUrl = "http://localhost:7545";
var rpcUrl = "http://192.168.60.12:7545";

const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);

console.log('Test web3.eth.sendTransaction.')

// HEX String - an integer block number
// String "earliest" for the earliest/genesis block
// String "latest" - for the latest mined block
// String "pending" - for the pending state/transactions
var code = "603d80600c6000396000f3007c01000000000000000000000000000000000000000000000000000000006000350463c6888fa18114602d57005b6007600435028060005260206000f3";

web3.eth.defaultAccount = web3.eth.coinbase;

// from 地址默认为 web3.eth.defaultAccount
// 需要先设置 web3.eth.defaultAccount，否则报错
// Error: invalid address
web3.eth.sendTransaction({data: code}, function(err, transactionHash) {
 if (!err)
   console.log(transactionHash); // "0x1e0da0a1ee39ce116028d199ffb19d8b07e26f92c5a6adbd4b94ad1699577112"
});
