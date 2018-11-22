def print_receipt(web3, receipt, optstr = None):
    # print('receipt: ', receipt)
    # print('type(receipt): ', type(receipt))
    
    print('\nreceipt {')
    print('\ttransactionHash: ', web3.toHex(receipt['transactionHash']))
    print('\ttransactionIndex: ', web3.toHex(receipt['transactionIndex']))
    print('\tblockHash: ', web3.toHex(receipt['blockHash']))
    print('\tblockNumber: ', web3.toHex(receipt['blockNumber']))
    print('\tgasUsed: ', web3.toHex(receipt['gasUsed']))
    print('\tcumulativeGasUsed: ', web3.toHex(receipt['cumulativeGasUsed']))
    
    print('\tlogs {', )
    i = 0
    for log in receipt['logs']:
        # print('\t\t\tlog: ', log)
        print('\t\tlog [', i, ']: {')
        print('\t\t\tlogIndex: ', web3.toInt(log['logIndex']))
        print('\t\t\ttransactionIndex: ', web3.toInt(log['transactionIndex']))
        print('\t\t\ttransactionHash: ', web3.toHex(log['transactionHash']))
        print('\t\t\tblockHash: ', web3.toHex(log['blockHash']))
        print('\t\t\tblockNumber: ', web3.toInt(log['blockNumber']))
        print('\t\t\taddress: ', log['address'])
        print('\t\t\tdata: ', log['data'])

        #print('\t\t\ttopics: ', log['topics'])
        print('\t\t\ttopics: {')
        j = 0
        for topic in log['topics']:
            print('\t\t\t\ttopic [', j, ']: ', web3.toHex(topic))
        print('\t\t\t}')

        print('\t\t\ttype: ', log['type'])
        i += 1
        print('\t\t}')
    print('\t}')

    print('\tstatus: ', web3.toHex(receipt['status']))
    print('\tlogsBloom: ', web3.toHex(receipt['logsBloom']))
    print('}')

