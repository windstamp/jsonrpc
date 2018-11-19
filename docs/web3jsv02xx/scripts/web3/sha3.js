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

console.log('Test sha3()');

var hash = web3.sha3("Some string to be hashed");
console.log(hash); // "0xed973b234cf2238052c9ac87072c71bcf33abc1bbd721018e0cca448ef79b379"
var hashOfHash = web3.sha3(hash, {encoding: 'hex'});
console.log(hashOfHash); // "0x85dd39c91a64167ba20732b228251e67caed1462d4bcf036af88dc6856d0fdcc"

var getValueSha = web3.sha3('getValue()');
console.log('getValueSha: ', getValueSha);
// 0x209652555fbf4ddd9bd2dab56f1bf9337657d553db79a552edf55d94497ead96

// 需要注意的是，需要将 int 调整为 int256，unit 调整为 uint256
var setValueSha = web3.sha3('setValue(int256)');
console.log('setValueSha: ', setValueSha);
// 0x5093dc7d5b11a7a3cf7e0a8d2320b72c85c29a8ab58f7f7e43d313adfb2ed41f

var TransferSha = web3.sha3('event Transfer(address, address, uint256)');
console.log('TransferSha', TransferSha);

var TransferSha = web3.sha3('Transfer(address indexed, address indexed, uint256)');
console.log('TransferSha', TransferSha);

var TransferSha = web3.sha3('event Transfer(byte32, byte32, uint256)');
console.log('TransferSha', TransferSha);

var TransferSha = web3.sha3('Transfer(byte32 indexed, byte32 indexed, uint256)');
console.log('TransferSha', TransferSha);

var ApprovalSha = web3.sha3('event Approval(address, address, uint256)');
console.log('ApprovalSha', ApprovalSha);

var ApprovalSha = web3.sha3('Approval(address indexed, address indexed, uint256)');
console.log('ApprovalSha', ApprovalSha);

var ApprovalSha = web3.sha3('Approval(byte32, byte32, uint256)');
console.log('ApprovalSha', ApprovalSha);

var ApprovalSha = web3.sha3('Approval(byte32 indexed, byte32 indexed, uint256)');
console.log('ApprovalSha', ApprovalSha);
