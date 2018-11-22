from web3 import Web3

rpcUrl = 'http://127.0.0.1:8545'

# web3 = Web3(Web3.HTTPProvider(rpcUrl))
web3 = Web3(Web3.HTTPProvider(rpcUrl, request_kwargs={'timeout': 1}))

print('coinbase: ', web3.eth.coinbase)
