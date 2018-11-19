var Web3 = require('web3');
var web3 = new Web3();

// var rpcUrl = "http://localhost:7545";
// var rpcUrl = "http://localhost:8545";
// var rpcUrl = "http://l92.168.60.24:8501";
// var rpcUrl = "http://l92.168.60.24:8745";
var rpcUrl = "http://localhost:8745";
// var rpcUrl = "http://l92.168.60.30:8102";

web3.setProvider(new web3.providers.HttpProvider(rpcUrl));

function watchBalance() {
    var coinbase = web3.eth.coinbase;
    var originalBalance = web3.eth.getBalance(coinbase).toNumber();
    originalBalance = web3.fromWei(originalBalance, 'ether');

    console.log('coinbase: ', coinbase);
    console.log('originalBalance: ', originalBalance);

    web3.eth.filter('latest').watch(function() {
        var currentBalance = web3.eth.getBalance(coinbase).toNumber();
        currentBalance = web3.fromWei(currentBalance, 'ether');

        console.log('current:', currentBalance);
        console.log('diff: ', (currentBalance - originalBalance));
    });
}

watchBalance();
