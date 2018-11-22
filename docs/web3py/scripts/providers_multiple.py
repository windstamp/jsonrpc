import web3

from web3 import Web3, HTTPProvider

special_provider = HTTPProvider('http://localhost:8545')
infura_provider = HTTPProvider('https://ropsten.infura.io')
provider = HTTPProvider('http://localhost:7545')

# w3 = Web3([special_provider, infura_provider, provider])
w3 = Web3([provider, special_provider, infura_provider])

# 第一个 provider 失败后，直接就报异常退出了
# 好像并不会再尝试后面的 provider

try:
    print('coinbase: ', w3.eth.coinbase)
except web3.exceptions.CannotHandleRequest as exp:
    print('exp: ', exp)
except Exception as exp:
    print('exp: ', exp)
