from web3 import Web3

from common.block_utils import print_block
from common.receipt_utils import print_receipt
from common.transaction_utils import print_transaction

# rpcUrl = 'http://localhost:7545'
rpcUrl = 'http://192.168.60.12:7545'

web3 = Web3(Web3.HTTPProvider(rpcUrl))

# 查询区块
block = web3.eth.getBlock(1)
print_block(web3, block)

block = web3.eth.getBlock('latest')
print_block(web3, block)

# 查询区块总数量
blockNumber = web3.eth.blockNumber
print('\nblockNumber: ', blockNumber)

# 各单位币种之间的转换
print( web3.toWei('1', 'ether') )
# 1000000000000000000

print( web3.fromWei(1000000000000000000, 'ether') )
# Decimal('1')

print( web3.fromWei(123456789, 'ether') )
# Decimal('1.23456789E-10')

# 查询交易回执
receipt = web3.eth.getTransactionReceipt('0xea3f46a978a47b5039d462a25da5f2b4d9a8adc88652612117f4ca0ac48f5e1a')
print_receipt(web3, receipt)

# 查询交易
transaction = web3.eth.getTransaction('0xea3f46a978a47b5039d462a25da5f2b4d9a8adc88652612117f4ca0ac48f5e1a')
print_transaction(web3, transaction)
