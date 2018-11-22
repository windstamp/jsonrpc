import os
import sys

import json
from web3.auto.infura import w3

sys.path.append(os.getcwd())

# rpcUrl = 'http://localhost:7545'
rpcUrl = 'http://192.168.60.12:7545'

# web3 = Web3(Web3.HTTPProvider(rpcUrl))
# w3 = web3

ERC20_ABI = json.loads('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]')  # noqa: 501

# Address field should be the checksum address at which the ERC20 contract was deployed
erc20 = w3.eth.contract(address='0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7', abi=ERC20_ABI)
print('erc20: ', erc20)
print('address: ', erc20.address)
# print('name: ', erc20.name())

print( erc20.functions.name().call() )
# 'Unicorns'

print( erc20.functions.symbol().call() )
# '🦄'

print( erc20.functions.decimals().call() )
# 0

print( erc20.functions.totalSupply().call() )
# 2039

print( erc20.functions.balanceOf('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb').call() )
# 1

from decimal import Decimal

# Most applications expect *exact* results, so using the Decimal library,
# with default precision of 28, is usually sufficient to avoid any rounding error.
decimals = erc20.functions.decimals().call()
balance = erc20.functions.balanceOf('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb').call()
print( balance / Decimal(10 ** decimals) )
# Decimal('1')
