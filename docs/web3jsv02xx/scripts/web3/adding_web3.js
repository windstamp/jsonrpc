var Web3 = require('web3');

var rpcUrl = "http://localhost:7545";
// var rpcUrl = "http://localhost:8545";
// var rpcUrl = "http://l92.168.60.24:8501";
// var rpcUrl = "http://l92.168.60.24:8745";
// var rpcUrl = "http://localhost:8745";
// var rpcUrl = "http://l92.168.60.30:8102";

console.log('Adding web3.js')

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);

    console.log('\n1111111111111111111');
    console.log('\nweb3: ', web3);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider(rpcUrl));

    console.log('\n22222222222222222222');
    console.log('\nweb3: ', web3);
}

/* web3:  Web3 {
    _requestManager:
     RequestManager {
       provider:
        HttpProvider {
          host: 'http://localhost:7545',
          timeout: 0,
          user: undefined,
          password: undefined,
          headers: undefined },
       polls: {},
       timeout: null },
    currentProvider:
     HttpProvider {
       host: 'http://localhost:7545',
       timeout: 0,
       user: undefined,
       password: undefined,
       headers: undefined },
    eth:
     Eth {
       _requestManager: RequestManager { provider: [Object], polls: {}, timeout: null },
       getBalance: { [Function: send] request: [Function: bound ], call: 'eth_getBalance' },
       getStorageAt: { [Function: send] request: [Function: bound ], call: 'eth_getStorageAt' },
       getCode: { [Function: send] request: [Function: bound ], call: 'eth_getCode' },
       getBlock: { [Function: send] request: [Function: bound ], call: [Function: blockCall] },
       getUncle: { [Function: send] request: [Function: bound ], call: [Function: uncleCall] },
       getCompilers: { [Function: send] request: [Function: bound ], call: 'eth_getCompilers' },
       getBlockTransactionCount:
        { [Function: send]
          request: [Function: bound ],
          call: [Function: getBlockTransactionCountCall] },
       getBlockUncleCount:
        { [Function: send]
          request: [Function: bound ],
          call: [Function: uncleCountCall] },
       getTransaction:
        { [Function: send]
          request: [Function: bound ],
          call: 'eth_getTransactionByHash' },
       getTransactionFromBlock:
        { [Function: send]
          request: [Function: bound ],
          call: [Function: transactionFromBlockCall] },
       getTransactionReceipt:
        { [Function: send]
          request: [Function: bound ],
          call: 'eth_getTransactionReceipt' },
       getTransactionCount: { [Function: send] request: [Function: bound ], call: 'eth_getTransactionCount' },
       call: { [Function: send] request: [Function: bound ], call: 'eth_call' },
       estimateGas: { [Function: send] request: [Function: bound ], call: 'eth_estimateGas' },
       sendRawTransaction: { [Function: send] request: [Function: bound ], call: 'eth_sendRawTransaction' },
       signTransaction: { [Function: send] request: [Function: bound ], call: 'eth_signTransaction' },
       sendTransaction: { [Function: send] request: [Function: bound ], call: 'eth_sendTransaction' },
       sign: { [Function: send] request: [Function: bound ], call: 'eth_sign' },
       compile: { solidity: [Object], lll: [Object], serpent: [Object] },
       submitWork: { [Function: send] request: [Function: bound ], call: 'eth_submitWork' },
       getWork: { [Function: send] request: [Function: bound ], call: 'eth_getWork' },
       coinbase: [Getter],
       getCoinbase: { [Function: get] request: [Function: bound ] },
       mining: [Getter],
       getMining: { [Function: get] request: [Function: bound ] },
       hashrate: [Getter],
       getHashrate: { [Function: get] request: [Function: bound ] },
       syncing: [Getter],
       getSyncing: { [Function: get] request: [Function: bound ] },
       gasPrice: [Getter],
       getGasPrice: { [Function: get] request: [Function: bound ] },
       accounts: [Getter],
       getAccounts: { [Function: get] request: [Function: bound ] },
       blockNumber: [Getter],
       getBlockNumber: { [Function: get] request: [Function: bound ] },
       protocolVersion: [Getter],
       getProtocolVersion: { [Function: get] request: [Function: bound ] },
       iban:
        { [Function: Iban]
          fromAddress: [Function],
          fromBban: [Function],
          createIndirect: [Function],
          isValid: [Function] },
       sendIBANTransaction: [Function: bound transfer] },
    db:
     DB {
       _requestManager: RequestManager { provider: [Object], polls: {}, timeout: null },
       putString: { [Function: send] request: [Function: bound ], call: 'db_putString' },
       getString: { [Function: send] request: [Function: bound ], call: 'db_getString' },
       putHex: { [Function: send] request: [Function: bound ], call: 'db_putHex' },
       getHex: { [Function: send] request: [Function: bound ], call: 'db_getHex' } },
    shh:
     Shh {
       _requestManager: RequestManager { provider: [Object], polls: {}, timeout: null },
       version: { [Function: send] request: [Function: bound ], call: 'shh_version' },
       info: { [Function: send] request: [Function: bound ], call: 'shh_info' },
       setMaxMessageSize: { [Function: send] request: [Function: bound ], call: 'shh_setMaxMessageSize' },
       setMinPoW: { [Function: send] request: [Function: bound ], call: 'shh_setMinPoW' },
       markTrustedPeer: { [Function: send] request: [Function: bound ], call: 'shh_markTrustedPeer' },
       newKeyPair: { [Function: send] request: [Function: bound ], call: 'shh_newKeyPair' },
       addPrivateKey: { [Function: send] request: [Function: bound ], call: 'shh_addPrivateKey' },
       deleteKeyPair: { [Function: send] request: [Function: bound ], call: 'shh_deleteKeyPair' },
       hasKeyPair: { [Function: send] request: [Function: bound ], call: 'shh_hasKeyPair' },
       getPublicKey: { [Function: send] request: [Function: bound ], call: 'shh_getPublicKey' },
       getPrivateKey: { [Function: send] request: [Function: bound ], call: 'shh_getPrivateKey' },
       newSymKey: { [Function: send] request: [Function: bound ], call: 'shh_newSymKey' },
       addSymKey: { [Function: send] request: [Function: bound ], call: 'shh_addSymKey' },
       generateSymKeyFromPassword:
        { [Function: send]
          request: [Function: bound ],
          call: 'shh_generateSymKeyFromPassword' },
       hasSymKey: { [Function: send] request: [Function: bound ], call: 'shh_hasSymKey' },
       getSymKey: { [Function: send] request: [Function: bound ], call: 'shh_getSymKey' },
       deleteSymKey: { [Function: send] request: [Function: bound ], call: 'shh_deleteSymKey' },
       post: { [Function: send] request: [Function: bound ], call: 'shh_post' } },
    net:
     Net {
       _requestManager: RequestManager { provider: [Object], polls: {}, timeout: null },
       listening: [Getter],
       getListening: { [Function: get] request: [Function: bound ] },
       peerCount: [Getter],
       getPeerCount: { [Function: get] request: [Function: bound ] } },
    personal:
     Personal {
       _requestManager: RequestManager { provider: [Object], polls: {}, timeout: null },
       newAccount: { [Function: send] request: [Function: bound ], call: 'personal_newAccount' },
       importRawKey: { [Function: send] request: [Function: bound ], call: 'personal_importRawKey' },
       unlockAccount: { [Function: send] request: [Function: bound ], call: 'personal_unlockAccount' },
       ecRecover: { [Function: send] request: [Function: bound ], call: 'personal_ecRecover' },
       sign: { [Function: send] request: [Function: bound ], call: 'personal_sign' },
       sendTransaction:
        { [Function: send]
          request: [Function: bound ],
          call: 'personal_sendTransaction' },
       lockAccount: { [Function: send] request: [Function: bound ], call: 'personal_lockAccount' },
       listAccounts: [Getter],
       getListAccounts: { [Function: get] request: [Function: bound ] } },
    bzz:
     Swarm {
       _requestManager: RequestManager { provider: [Object], polls: {}, timeout: null },
       blockNetworkRead: { [Function: send] request: [Function: bound ], call: 'bzz_blockNetworkRead' },
       syncEnabled: { [Function: send] request: [Function: bound ], call: 'bzz_syncEnabled' },
       swapEnabled: { [Function: send] request: [Function: bound ], call: 'bzz_swapEnabled' },
       download: { [Function: send] request: [Function: bound ], call: 'bzz_download' },
       upload: { [Function: send] request: [Function: bound ], call: 'bzz_upload' },
       retrieve: { [Function: send] request: [Function: bound ], call: 'bzz_retrieve' },
       store: { [Function: send] request: [Function: bound ], call: 'bzz_store' },
       get: { [Function: send] request: [Function: bound ], call: 'bzz_get' },
       put: { [Function: send] request: [Function: bound ], call: 'bzz_put' },
       modify: { [Function: send] request: [Function: bound ], call: 'bzz_modify' },
       hive: [Getter],
       getHive: { [Function: get] request: [Function: bound ] },
       info: [Getter],
       getInfo: { [Function: get] request: [Function: bound ] } },
    settings: Settings { defaultBlock: 'latest', defaultAccount: undefined },
    version:
     { api: '0.20.6',
       node: [Getter],
       getNode: { [Function: get] request: [Function: bound ] },
       network: [Getter],
       getNetwork: { [Function: get] request: [Function: bound ] },
       ethereum: [Getter],
       getEthereum: { [Function: get] request: [Function: bound ] },
       whisper: [Getter],
       getWhisper: { [Function: get] request: [Function: bound ] } },
    providers:
     { HttpProvider: [Function: HttpProvider],
       IpcProvider: [Function: IpcProvider] },
    _extend:
     { [Function: ex]
       formatters:
        { inputDefaultBlockNumberFormatter: [Function: inputDefaultBlockNumberFormatter],
          inputBlockNumberFormatter: [Function: inputBlockNumberFormatter],
          inputCallFormatter: [Function: inputCallFormatter],
          inputTransactionFormatter: [Function: inputTransactionFormatter],
          inputAddressFormatter: [Function: inputAddressFormatter],
          inputPostFormatter: [Function: inputPostFormatter],
          outputBigNumberFormatter: [Function: outputBigNumberFormatter],
          outputTransactionFormatter: [Function: outputTransactionFormatter],
          outputTransactionReceiptFormatter: [Function: outputTransactionReceiptFormatter],
          outputBlockFormatter: [Function: outputBlockFormatter],
          outputLogFormatter: [Function: outputLogFormatter],
          outputPostFormatter: [Function: outputPostFormatter],
          outputSyncingFormatter: [Function: outputSyncingFormatter] },
       utils:
        { padLeft: [Function: padLeft],
          padRight: [Function: padRight],
          toHex: [Function: toHex],
          toDecimal: [Function: toDecimal],
          fromDecimal: [Function: fromDecimal],
          toUtf8: [Function: toUtf8],
          toAscii: [Function: toAscii],
          fromUtf8: [Function: fromUtf8],
          fromAscii: [Function: fromAscii],
          transformToFullName: [Function: transformToFullName],
          extractDisplayName: [Function: extractDisplayName],
          extractTypeName: [Function: extractTypeName],
          toWei: [Function: toWei],
          fromWei: [Function: fromWei],
          toBigNumber: [Function: toBigNumber],
          toTwosComplement: [Function: toTwosComplement],
          toAddress: [Function: toAddress],
          isBigNumber: [Function: isBigNumber],
          isStrictAddress: [Function: isStrictAddress],
          isAddress: [Function: isAddress],
          isChecksumAddress: [Function: isChecksumAddress],
          toChecksumAddress: [Function: toChecksumAddress],
          isFunction: [Function: isFunction],
          isString: [Function: isString],
          isObject: [Function: isObject],
          isBoolean: [Function: isBoolean],
          isArray: [Function: isArray],
          isJson: [Function: isJson],
          isBloom: [Function: isBloom],
          isTopic: [Function: isTopic] },
       Method: [Function: Method],
       Property: [Function: Property] } }
  */ 
