// https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethgetblock

var Web3 = require('web3');

//var rpcUrl = "http://localhost:7545";
var rpcUrl = "http://192.168.60.12:7545";

const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);

console.log('Test web3.eth.contract.')

const fs = require("fs");
const solc = require('solc')
let source = fs.readFileSync('contracts/MyContract.sol', 'utf8');
let compiledContract = solc.compile(source, 1);

// 直接输出编译后的内容
// console.log('compiledContract: ', compiledContract);

// 注意，这里用的是 ':MyContract' 而不是 'MyContract'
// 这些内容具体和 solc 的版本，以及 MyContract.sol 中指定的版本有关
let abi = compiledContract.contracts[':MyContract'].interface;
let bytecode = compiledContract.contracts[':MyContract'].bytecode;
let gasEstimate = web3.eth.estimateGas({data: bytecode});
let MyContract = web3.eth.contract(JSON.parse(abi));

MyContract.new({
from: web3.eth.coinbase,
data: bytecode,
gas: gasEstimate}, function(err, myContract){
    if(!err) {
    // NOTE: The callback will fire twice!
    // Once the contract has the transactionHash property set and once its deployed on an address.
        // e.g. check tx hash on the first call (transaction send)
        if(!myContract.address) {
            console.log('111: ', myContract.transactionHash) // The hash of the transaction, which deploys the contract
        
        // check address on the second call (contract deployed)
        } else {
            console.log('222: ', myContract.address) // the contract address
        }
        // Note that the returned "myContractReturned" === "myContract",
    // so the returned "myContractReturned" object will also get the address set.
    }
});

// Deploy contract syncronous: The address will be added as soon as the contract is mined.
// Additionally you can watch the transaction by using the "transactionHash" property
var myContractInstance = MyContract.new({data: bytecode, gas: gasEstimate, from: web3.eth.coinbase});
console.log('333: ', myContractInstance.transactionHash); // The hash of the transaction, which created the contract
console.log('444: ', myContractInstance.address) // undefined at start, but will be auto-filled later
