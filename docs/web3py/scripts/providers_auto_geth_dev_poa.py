from web3.auto.gethdev import w3

# 这个需要先在 http://localhost:8545 启动 geth PoA 才行。

# confirm that the connection succeeded
print( w3.isConnected() )
# True
