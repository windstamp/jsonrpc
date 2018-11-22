from web3 import Web3

rpcUrl = 'http://192.168.60.12:7545'

web3 = Web3(Web3.HTTPProvider(rpcUrl))

abiArray = '[{"constant": true, "inputs": [], "name": "value", "outputs": [{"name": "", "type": "int256"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "owner", "outputs": [{"name": "", "type": "address"}], "payable": false, "stateMutability": "view", "type": "function"}, {"inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor"}, {"anonymous": false, "inputs": [{"indexed": false, "name": "value", "type": "int256"}], "name": "SetValue", "type": "event"}, {"constant": false, "inputs": [{"name": "v", "type": "int256"}], "name": "setValue", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "getValue", "outputs": [{"name": "", "type": "int256"}], "payable": false, "stateMutability": "view", "type": "function"}]'

addressOfMyContract = '0x6f3c8f92f015be587993fc8732d7b1034633d5bf'

MyContract = web3.eth.contract(abi=abiArray)

# myContract = MyContract(address=addressOfMyContract)
myContract = MyContract(address=Web3.toChecksumAddress(addressOfMyContract))

print('\naddressOfMyContract: ', myContract.address)
# addressOfMyContract:  0x6f3C8F92F015Be587993fc8732d7B1034633d5Bf

print('\nmyContract: ', myContract)

value = myContract.functions.getValue().call()
print('value: ', value)

myContract.functions.setValue(10).transact({'from': web3.eth.coinbase})

value = myContract.functions.getValue().call()
print('value: ', value)
