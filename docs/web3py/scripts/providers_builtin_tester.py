# EthereumTesterProvider
if True:
    print('EthereumTesterProvider')

    import web3

    from web3 import Web3, EthereumTesterProvider
    w3 = Web3(EthereumTesterProvider())

    # ModuleNotFoundError: No module named 'eth_tester'
    # pip install eth_tester

    print(w3)
    print(w3.eth)
    print(w3.providers)

    try:
        print('coinbase: ', w3.eth.coinbase)
        print('balance: ', w3.fromWei(w3.eth.getBalance(w3.eth.coinbase), 'ether'))
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

# EthereumTesterProvider (legacy)
if True:
    print('EthereumTesterProvider (legacy)')
    
    import web3

    from web3 import Web3
    from web3.providers.tester import EthereumTesterProvider
    w3 = Web3(EthereumTesterProvider())

    # Exception: `TestRPCProvider` requires the `eth-testrpc` package to be installed
    # pip install eth-testrpc

    print(w3)
    print(w3.eth)
    print(w3.providers)

    try:
        print('coinbase: ', w3.eth.coinbase)
        print('balance: ', w3.fromWei(w3.eth.getBalance(w3.eth.coinbase), 'ether'))
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


