// https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethgetblock

var Web3 = require('web3');

//var rpcUrl = "http://localhost:7545";
var rpcUrl = "http://192.168.60.12:7545";

const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);

console.log('Test web3.eth.contract.')

var abiArray = [
    {
      "constant": true,
      "inputs": [],
      "name": "value",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "value",
          "type": "int256"
        }
      ],
      "name": "SetValue",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "v",
          "type": "int256"
        }
      ],
      "name": "setValue",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getValue",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];

var bytecode = '0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506101e5806100606000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806320965255146100675780633fa4f245146100925780635093dc7d146100bd5780638da5cb5b146100ea575b600080fd5b34801561007357600080fd5b5061007c610141565b6040518082815260200191505060405180910390f35b34801561009e57600080fd5b506100a761014b565b6040518082815260200191505060405180910390f35b3480156100c957600080fd5b506100e860048036038101908080359060200190929190505050610151565b005b3480156100f657600080fd5b506100ff610194565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000600154905090565b60015481565b806001819055507fe5841a16311d3f7587d0fdd863cbb464a3131712f738d4fc92de48143dc90ec56001546040518082815260200191505060405180910390a150565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a723058201ab93e5fbd6944d173865c4b40c6ee1fcbd2a4b6c924352e00f2fee93aa9e0ae0029';

var addressOfMyContract = '0x3270a9a43f430026c62572bc0c3b5951db1c77ef';
var dataOfsetValue = '0x5093dc7d000000000000000000000000000000000000000000000000000000000000000a';

var MyContract = web3.eth.contract(abiArray);
// instantiate by address
var contractInstance = MyContract.at(addressOfMyContract);

// Automatically determines the use of call or sendTransaction based on the method type
contractInstance.getValue(function(error, result) {
    if (error) {
        console.log('error: ', error);
        return;
    }

    console.log('result: ', result.toNumber());     // value
});

// Automatically determines the use of call or sendTransaction based on the method type
// contractInstance.setValue(37, {from: web3.eth.coinbase}, function(error, result) {
//     if (error) {
//         console.log('error: ', error);
//         return;
//     }

//     console.log('result: ', result);    // txHash
// });

// Explicitly calling this method
// contractInstance.getValue.call(function(error, result) {
//     if (error) {
//         console.log('error: ', error);
//         return;
//     }

//     console.log('result: ', result.toNumber());     // value
// });

// 下面的方法无效，但也不会报错，输出结果为 []
// Explicitly calling this method
// contractInstance.setValue.call(37, {from: web3.eth.coinbase}, function(error, result) {
//     if (error) {
//         console.log('error: ', error);
//         return;
//     }

//     console.log('result: ', result);    // []
// });

// 下面的方法无效，但也不会报错，输出结果为 []
// Explicitly sending a transaction to this method
// contractInstance.getValue.sendTransaction({from: web3.eth.coinbase}, function(error, result) {
//     if (error) {
//         console.log('error: ', error);
//         return;
//     }

//     console.log('result: ', result);     // value
// });

// Explicitly sending a transaction to this method
contractInstance.setValue.sendTransaction(79, {from: web3.eth.coinbase}, function(error, result) {
    if (error) {
        console.log('error: ', error);
        return;
    }

    console.log('result: ', result);    // txHash
});

// Get the call data, so you can call the contract through some other means
// var myCallData = myContractInstance.myMethod.request(param1 [, param2, ...]);
var getValueData = contractInstance.getValue.getData();
console.log('getValueData: ', getValueData);
// 0x20965255

var setValueData = contractInstance.setValue.getData(10);
console.log('setValueData: ', setValueData);
// 0x5093dc7d000000000000000000000000000000000000000000000000000000000000000a

var getValueSha = web3.sha3('getValue()');
console.log('getValueSha: ', getValueSha);
// 0x209652555fbf4ddd9bd2dab56f1bf9337657d553db79a552edf55d94497ead96

// 需要注意的是，需要将 int 调整为 int256，unit 调整为 uint256
var setValueSha = web3.sha3('setValue(int256)');
console.log('setValueSha: ', setValueSha);
// 0x5093dc7d5b11a7a3cf7e0a8d2320b72c85c29a8ab58f7f7e43d313adfb2ed41f
