from web3 import Web3

ipcUrl = "~/Library/Ethereum/geth.ipc"

web3 = Web3(Web3.IPCProvider(ipcUrl))

print('coinbase: ', web3.eth.coinbase)
