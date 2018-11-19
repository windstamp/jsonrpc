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

// creation of contract object
var MyContract = web3.eth.contract(abiArray);
// initiate contract for an address
var myContractInstance = MyContract.at(addressOfMyContract);

// 实际上 value 并没有直到任何过滤的作用
// watch for an event with {some: 'args'}
var myEvent = myContractInstance.SetValue({value: 4510}, {fromBlock: 0, toBlock: 'latest'});
myEvent.watch(function(error, result) {
    if (error) {
        console.error(error);
        return;
    }
    
    console.log('\nEvent for Transfer:');
    console.log('transactionIndex: ', result.transactionIndex);
    console.log('transactionHash: ', result.transactionHash);
    console.log('blockHash: ', result.blockHash);
    console.log('blockNumber: ', result.blockNumber);
    console.log('addressOfFurnaceCoin: ', result.address);
    console.log('from: ', result.args.from);
    console.log('to: ', result.args.to);
    console.log('value: ', result.args.value.toNumber());
})

// would get all past logs again.
var myResults = myEvent.get(function(error, logs) {
    if (error) {
        console.log('error: ', error)
        return;
    }

    // console.log('result: ', logs);
    console.log('logs [');
    logs.forEach(function(log, i) {
            console.log('\tlog[', i, '] {');
            console.log('\t\tlogIndex: ', log.logIndex);
            console.log('\t\ttransactionHash: ', log.transactionHash);
            console.log('\t\ttransactionIndex: ', log.transactionIndex);
            console.log('\t\tblockHash: ', log.blockHash);
            console.log('\t\tblockNumber: ', log.blockNumber);
            console.log('\t\taddress: ', log.address);
            console.log('\t\tdata: ', log.data);
            console.log('\t\ttype: ', log.type);
        
            console.log('\t\ttopics:')
            if (log.topics != undefined)
            log.topics.forEach(function(topic, i){
                console.log('\t\t\ttopics[', i, ']', topic);
            });
        
            console.log('\t}');
    });
    console.log(']');
});

// would stop and uninstall the filter
myEvent.stopWatching();
