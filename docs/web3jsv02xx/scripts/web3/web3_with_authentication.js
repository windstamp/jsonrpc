// 本示例用来测试如何通过授权访问RPC
// 测试结果为当连接的RPC是ganache这种网络时，BasicAuthUsername 和 BasicAuthPassword 可以随便设置，都能获取到 coinbase
// 而当将网络调整为PoA时，则报错。
// Error: Invalid JSON RPC response: undefined

var Web3 = require('web3');

// var rpcUrl = "http://localhost:7545";
// var rpcUrl = "http://localhost:8545";
// var rpcUrl = "http://l92.168.60.24:8501";
// var rpcUrl = "http://l92.168.60.24:8745";
// var rpcUrl = "http://localhost:8745";
var rpcUrl = "http://l92.168.60.30:8102";

// var BasicAuthUsername = '';
// var BasicAuthPassword = '';

// var BasicAuthUsername = 'furnace';
// var BasicAuthPassword = 'furnace';

var BasicAuthUsername = 'root';
var BasicAuthPassword = '123456';

var web3 = new Web3(new Web3.providers.HttpProvider(rpcUrl, 0, BasicAuthUsername, BasicAuthPassword));
//Note: HttpProvider takes 4 arguments (host, timeout, user, password)

// web3.js 1.0 version
// let web3 = new Web3(
//     new Web3.providers.HttpProvider(
//         'http://' + username + ':' + password + '@'+ ip + ':' + port
//     )
// )

console.log('usage web3.js')

console.log('\nweb3: ', web3);

console.log('\ncoinbase: ', web3.eth.coinbase);
