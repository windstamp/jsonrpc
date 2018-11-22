from web3 import Web3, HTTPProvider, IPCProvider, WebsocketProvider

# Note that you should create only one RPCProvider per
# process, as it recycles underlying TCP/IP network connections between
# your process and Ethereum node
web3 = Web3(HTTPProvider('http://localhost:7545'))
print('blockNumber: ', web3.eth.blockNumber)

# or for an IPC based connection
web3 = Web3(IPCProvider())
# print('blockNumber: ', web3.eth.blockNumber)

# or for Websocket based connection
web3 = Web3(WebsocketProvider('ws://127.0.0.1:7546'))
# print('blockNumber: ', web3.eth.blockNumber)

print( Web3.toHex(0) )
# '0x0'

print( Web3.toHex(1) )
# '0x1'

print( Web3.toHex(0x0) )
# '0x0'

print( Web3.toHex(0x000F) )
# '0xf'

print( Web3.toHex(b'') )
# '0x'

print( Web3.toHex(b'\x00\x0F') )
# '0x000f'

print( Web3.toHex(False) )
# '0x0'

print( Web3.toHex(True) )
# '0x1'

print( Web3.toHex(hexstr='0x000F') )
# '0x000f'

print( Web3.toHex(hexstr='000F') )
# '0x000f'

print( Web3.toHex(text='') )
# '0x'

print( Web3.toHex(text='cowmö') )
# '0x636f776dc3b6'

# 下面的会报错
# print( Web3.toHex('好好学习，天天向上') )
# '0xe5a5bde5a5bde5ada6e4b9a0efbc8ce5a4a9e5a4a9e59091e4b88a'

print( Web3.toHex(text='好好学习，天天向上') )
# '0xe5a5bde5a5bde5ada6e4b9a0efbc8ce5a4a9e5a4a9e59091e4b88a'

print( Web3.toText(0x636f776dc3b6) )
# 'cowmö'

print( Web3.toText(b'cowm\xc3\xb6') )
# 'cowmö'

print( Web3.toText(hexstr='0x636f776dc3b6') )
# 'cowmö'

print( Web3.toText(hexstr='636f776dc3b6') )
# 'cowmö'

print( Web3.toText(text='cowmö') )
# 'cowmö'

print( Web3.toText(hexstr='0xe5a5bde5a5bde5ada6e4b9a0efbc8ce5a4a9e5a4a9e59091e4b88a') )
# '好好学习，天天向上'

print( Web3.toText(text='好好学习，天天向上') )
# '好好学习，天天向上'

print( Web3.toText(b'\xe5\xa5\xbd\xe5\xa5\xbd\xe5\xad\xa6\xe4\xb9\xa0\xef\xbc\x8c\xe5\xa4\xa9\xe5\xa4\xa9\xe5\x90\x91\xe4\xb8\x8a') )
# '好好学习，天天向上'

print( Web3.toBytes(0) )
# b'\x00'

print( Web3.toBytes(0x000F) )
# b'\x0f'

print( Web3.toBytes(b'') )
# b''

print( Web3.toBytes(b'\x00\x0F') )
# b'\x00\x0f'

print( Web3.toBytes(False) )
# b'\x00'

print( Web3.toBytes(True) )
# b'\x01'

print( Web3.toBytes(hexstr='0x000F') )
# b'\x00\x0f'

print( Web3.toBytes(hexstr='000F') )
# b'\x00\x0f'

print( Web3.toBytes(text='') )
# b''

print( Web3.toBytes(text='cowmö') )
# b'cowm\xc3\xb6'

print( Web3.toBytes(text='好好学习，天天向上') )
# b'\xe5\xa5\xbd\xe5\xa5\xbd\xe5\xad\xa6\xe4\xb9\xa0\xef\xbc\x8c\xe5\xa4\xa9\xe5\xa4\xa9\xe5\x90\x91\xe4\xb8\x8a'

print( Web3.toInt(0) )
# 0

print( Web3.toInt(0x000F) )
# 15

print( Web3.toInt(b'\x00\x0F') )
# 15

print( Web3.toInt(False) )
# 0

print( Web3.toInt(True) )
# 1

print( Web3.toInt(hexstr='0x000F') )
# 15

print( Web3.toInt(hexstr='000F') )
# 15

print( Web3.toWei(1, 'ether') )
# 1000000000000000000

print( web3.fromWei(1000000000000000000, 'ether') )
# Decimal('1')

print( web3.isAddress('0xd3CdA913deB6f67967B99D67aCDFa1712C293601') )
# True

print( web3.isChecksumAddress('0xd3CdA913deB6f67967B99D67aCDFa1712C293601') )
# True

print( web3.isChecksumAddress('0xd3cda913deb6f67967b99d67acdfa1712c293601') )
# False

print( Web3.toChecksumAddress('0xd3cda913deb6f67967b99d67acdfa1712c293601') )
# '0xd3CdA913deB6f67967B99D67aCDFa1712C293601'

print( Web3.sha3(0x747874) )
print( Web3.sha3(b'\x74\x78\x74') )
print( Web3.sha3(hexstr='0x747874') )
print( Web3.sha3(hexstr='747874') )
print( Web3.sha3(text='txt') )
# b'\xd7\'\x80\x90\xa3e\x07d\x0e\xa6\xb7\xa0\x03Ki\xb0\xd2@vo\xa3\xf9\x8e7"\xbe\x93\xc6\x13\xb2\x9d.'

print( Web3.toHex( Web3.sha3(0x747874) ) )
print( Web3.toHex( Web3.sha3(b'\x74\x78\x74') ) )
print( Web3.toHex( Web3.sha3(hexstr='0x747874') ) )
print( Web3.toHex( Web3.sha3(hexstr='747874') ) )
print( Web3.toHex( Web3.sha3(text='txt') ) )
# 0xd7278090a36507640ea6b7a0034b69b0d240766fa3f98e3722be93c613b29d2e
# HexBytes('0xd7278090a36507640ea6b7a0034b69b0d240766fa3f98e3722be93c613b29d2e')

print( Web3.soliditySha3(['bool'], [True]) )
# HexBytes("0x5fe7f977e71dba2ea1a68e21057beebb9be2ac30c6410aa38d4f3fbe41dcffd2")

print( Web3.soliditySha3(['uint8', 'uint8', 'uint8'], [97, 98, 99]) )
# HexBytes("0x4e03657aea45a94fc7d47ba826c8d667c0d1e6e33a64a036ec44f58fa12d6c45")

print( Web3.soliditySha3(['uint8[]'], [[97, 98, 99]]) )
# HexBytes("0x233002c671295529bcc50b76a2ef2b0de2dac2d93945fca745255de1a9e4017e")

# web3.exceptions.InvalidAddress: ('Web3.py only accepts checksum addresses.
# The software that gave you this non-checksum address should be considered unsafe,
# please file it as a bug on their platform. Try using an ENS name instead. Or,
# if you must accept lower safety, use Web3.toChecksumAddress(lower_case_address).',
# '0x49eddd3769c0712032808d86597b84ac5c2f5614')
# print( Web3.soliditySha3(['address'], ["0x49eddd3769c0712032808d86597b84ac5c2f5614"]) )
print( Web3.soliditySha3(['address'], [Web3.toChecksumAddress("0x49eddd3769c0712032808d86597b84ac5c2f5614")]) )
# HexBytes("0x2ff37b5607484cd4eecf6d13292e22bd6e5401eaffcc07e279583bc742c68882")

# web3.exceptions.InvalidAddress: Could not look up name 'ethereumfoundation.eth' because no web3 connection available
# print( Web3.soliditySha3(['address'], ["ethereumfoundation.eth"]) )
# HexBytes("0x913c99ea930c78868f1535d34cd705ab85929b2eaaf70fcd09677ecd6e5d75e9")

print( Web3.toHex( Web3.soliditySha3(['bool'], [True]) ) )
# 0x5fe7f977e71dba2ea1a68e21057beebb9be2ac30c6410aa38d4f3fbe41dcffd2
# HexBytes("0x5fe7f977e71dba2ea1a68e21057beebb9be2ac30c6410aa38d4f3fbe41dcffd2")

print( Web3.toHex( Web3.soliditySha3(['uint8', 'uint8', 'uint8'], [97, 98, 99]) ) )
# 0x5fe7f977e71dba2ea1a68e21057beebb9be2ac30c6410aa38d4f3fbe41dcffd2
# HexBytes("0x4e03657aea45a94fc7d47ba826c8d667c0d1e6e33a64a036ec44f58fa12d6c45")

print( Web3.toHex( Web3.soliditySha3(['uint8[]'], [[97, 98, 99]]) ) )
# 0x5fe7f977e71dba2ea1a68e21057beebb9be2ac30c6410aa38d4f3fbe41dcffd2
# HexBytes("0x233002c671295529bcc50b76a2ef2b0de2dac2d93945fca745255de1a9e4017e")

# web3.exceptions.InvalidAddress: ('Web3.py only accepts checksum addresses.
# The software that gave you this non-checksum address should be considered unsafe,
# please file it as a bug on their platform. Try using an ENS name instead. Or,
# if you must accept lower safety, use Web3.toChecksumAddress(lower_case_address).',
# '0x49eddd3769c0712032808d86597b84ac5c2f5614')
# print( Web3.soliditySha3(['address'], ["0x49eddd3769c0712032808d86597b84ac5c2f5614"]) )
print( Web3.toHex( Web3.soliditySha3(['address'], [Web3.toChecksumAddress("0x49eddd3769c0712032808d86597b84ac5c2f5614")]) ) )
# 0x5fe7f977e71dba2ea1a68e21057beebb9be2ac30c6410aa38d4f3fbe41dcffd2
# HexBytes("0x2ff37b5607484cd4eecf6d13292e22bd6e5401eaffcc07e279583bc742c68882")

# web3.exceptions.InvalidAddress: Could not look up name 'ethereumfoundation.eth' because no web3 connection available
# print( Web3.toHex( Web3.soliditySha3(['address'], ["ethereumfoundation.eth"]) ) )
# HexBytes("0x913c99ea930c78868f1535d34cd705ab85929b2eaaf70fcd09677ecd6e5d75e9")
