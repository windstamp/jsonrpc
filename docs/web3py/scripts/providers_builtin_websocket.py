from web3 import Web3

wsUrl = 'http://127.0.0.1:8546'

# web3 = Web3(Web3.HTTPProvider(rpcUrl))
web3 = Web3(Web3.WebsocketProvider(wsUrl, request_kwargs={'timeout': 60}))

print('coinbase: ', web3.eth.coinbase)
