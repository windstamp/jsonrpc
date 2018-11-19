var Web3 = require('web3');

const provider = new Web3.providers.HttpProvider("http://localhost:7545");
const web3 = new Web3(provider);

var version = web3.version.api;
console.log('version = ', version);

// signHash = Web3.sha3('function setValue(int v)');
// console.log('signHash = ', signHash);

// signHash = Web3.sha3('setValue(int v)');
// console.log('signHash = ', signHash);

// signHash = Web3.sha3('setValue(int,)');
// console.log('signHash = ', signHash);

// signHash = eb3.keccak256('function setValue(int v)');
// console.log('signHash = ', signHash);

// signHash = Web3.keccak256('setValue(int v)');
// signHash4 = '998e47ba';
// console.log('signHash = ', signHash);
// console.log('signHash4 = ', web3.utils.toHex(signHash4));

// signHash = Web3.keccak256('setValue(int,)');
// signHash4 = '00a204a3';
// console.log('signHash = ', signHash);
// console.log('signHash4 = ', web3.utils.toHex(signHash4));

var coinbase = web3.eth.coinbase;
console.log('coinbase = ', coinbase);

acc0 = web3.eth.accounts[0];
console.log('acc0 = ', coinbase);

// web3.eth.sendTransaction({
//     from: acc0,
//     to: "0xa2a02370ec21d6904f6507739679b6c61e36123c",
//     data: "0x5093dc7d000000000000000000000000000000000000000000000000000000000000000a"
// });

signHash = web3.sha3('function Transfer(address indexed from, address indexed to, uint256 value)');
console.log('signHash = ', signHash);

signHash = web3.sha3('function Transfer(address, address, uint256)');
console.log('signHash = ', signHash);

signHash = web3.sha3('Transfer(address, address, uint256)');
console.log('signHash = ', signHash);

signHash = web3.sha3('function transfer(address _to, uint256 _value)');
console.log('signHash = ', signHash);

signHash = web3.sha3('function transfer(address, uint256)');
console.log('signHash = ', signHash);

signHash = web3.sha3('transfer(address, uint256)');
console.log('signHash = ', signHash);
