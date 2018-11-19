var Web3 = require('web3');
var web3 = new Web3();

var rpcUrl = "http://localhost:7545";
// var rpcUrl = "http://localhost:8545";
// var rpcUrl = "http://l92.168.60.24:8501";
// var rpcUrl = "http://l92.168.60.24:8745";
// var rpcUrl = "http://localhost:8745";
// var rpcUrl = "http://l92.168.60.30:8102";

web3.setProvider(new web3.providers.HttpProvider(rpcUrl));

console.log('Test isConnected.')

if(!web3.isConnected()) {
    // show some dialog to ask the user to start a node
    console.log('\nnot connect.');
} else {
    // start web3 filters, calls, etc
    console.log('\nconnect.');
}
