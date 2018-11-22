from web3 import Web3
# web3 = Web3(Web3.HTTPProvider("http://localhost:7545"))
web3 = Web3(Web3.HTTPProvider("http://192.168.60.12:7545"))
# web3 = Web3(Web3.HTTPProvider("http://192.168.60.12:8545"))

# contract_address = Web3.toChecksumAddress('0x8724827c08a76afc38c4771cd3cad15e59b8d1a4')
# print('contract_address: ', contract_address)
# event_filter = web3.eth.filter({"address": contract_address})
# entries = event_filter.get_new_entries()
# print('entries: ', entries)

topic1 = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
topic2 = '0x0000000000000000000000004045C2c4Af5849A3117377bDDC06ae7735B51b99'
event_filter = web3.eth.filter({"topics": [topic2]})
entries = event_filter.get_new_entries()
print('entries: ', entries)
