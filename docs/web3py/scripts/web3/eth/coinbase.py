from web3 import Web3

# rpcUrl = 'http://localhost:7545'
rpcUrl = 'http://192.168.60.12:7545'

web3 = Web3(Web3.HTTPProvider(rpcUrl))

result = web3.eth.coinbase

print('result: ', result)
