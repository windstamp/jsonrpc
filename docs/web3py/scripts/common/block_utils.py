def print_block(web3, block, optstr = None):
    # print('block: ', block)
    # print('type(block): ', type(block))
    
    print('\nblock {')
    print('\tnumber: ', block['number'])
    print('\thash: ', web3.toHex(block['hash']))
    print('\tparentHash: ', web3.toHex(block['parentHash']))
    print('\tmixHash: ', web3.toHex(block['mixHash']))
    print('\tnonce: ', web3.toInt(block['nonce']))
    print('\tsha3Uncles: ', web3.toHex(block['sha3Uncles']))
    print('\tlogsBloom: ', web3.toHex(block['logsBloom']))
    print('\ttransactionsRoot: ', web3.toHex(block['transactionsRoot']))
    print('\tstateRoot: ', web3.toHex(block['stateRoot']))
    print('\treceiptsRoot: ', web3.toHex(block['receiptsRoot']))
    print('\tminer: ', block['miner'])
    print('\tdifficulty: ', block['difficulty'])
    print('\ttotalDifficulty: ', block['totalDifficulty'])
    print('\textraData: ', web3.toText(block['extraData']))
    print('\tsize: ', block['size'])
    print('\tgasLimit: ', block['gasLimit'])
    print('\tgasUsed: ', block['gasUsed'])
    print('\ttimestamp: ', block['timestamp'])

    # print('transactions: ', block['transactions'])
    # print('type(transactions): ', type(block['transactions']))
    print('\ttransactions [')
    i = 0
    for transaction in block['transactions']:
        print('\t\ttransaction[', i, ']: ', web3.toHex(transaction))

        i += 1
    print('\t]')

    # print('uncles: ', block['uncles'])
    # print('type(uncles): ', type(block['uncles']))
    print('\tuncles [')
    i = 0
    for uncle in block['uncles']:
        print('\t\tuncle[', i, ']: ', web3.toHex(uncle))

        i += 1
    print('\t]')

    print('}')
