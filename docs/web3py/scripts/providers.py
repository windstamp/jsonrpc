import web3

from web3.auto import w3

print(w3)
print(w3.eth)
print(w3.providers)

try:
    print(w3.eth.coinbase)
except web3.exceptions.UnhandledRequest as exp:
    print(exp)

print( w3.toHex(0) )
# 0

print( w3.toWei(1, 'ether') )
# 1000000000000000000

print( w3.isChecksumAddress('0xd3CdA913deB6f67967B99D67aCDFa1712C293601') )
# True

print( w3.isChecksumAddress('0xd3cda913deb6f67967b99d67acdfa1712c293601') )
# False

# from web3.auto import w3

connected = w3.isConnected()
print(connected)

if connected:
    print(w3.version.node)  // ganache-cli: EthereumJS TestRPC/v2.1.0/ethereum-js

if connected and w3.version.node.startswith('Parity'):
    enode = w3.parity.enode
elif connected and w3.version.node.startswith('Geth'):
    enode = w3.admin.nodeInfo['enode']
else:
    enode = None

print(enode)
