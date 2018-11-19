// https://github.com/ethereum/wiki/wiki/JavaScript-API

var Web3 = require('web3');

var rpcUrl = "http://localhost:7545";
// var rpcUrl = "http://localhost:8545";
// var rpcUrl = "http://l92.168.60.24:8501";
// var rpcUrl = "http://l92.168.60.24:8745";
// var rpcUrl = "http://localhost:8745";
// var rpcUrl = "http://l92.168.60.30:8102";
// var rpcUrl = "http://l92.168.60.31:8100";

const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);

console.log('Test web3.eth.isSyncing');

// 异步调用
// TypeError: web3.eth.getPeerCount is not a function
web3.eth.isSyncing(function(error, sync){
    if(!error) {
        // stop all app activity
        if(sync === true) {
           // we use `true`, so it stops all filters, but not the web3.eth.syncing polling
           web3.reset(true);
        
        // show sync info
        } else if(sync) {
           console.log(sync.currentBlock);
        
        // re-gain app operation
        } else {
            // run your app init function...
        }
    }
 });
