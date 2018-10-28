import $ from 'jquery';
import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

const getAccounts = () => {
    $('#accounts').html("");
    web3.eth.accounts.forEach(account => {
      let balance = web3.eth.getBalance(account);
      $('#accounts').append(`<p><span class="address">${account}</span> | <span class="balance">ETH ${balance}</span></p>`);
    });
};

const getBlock = () => {
    let blockNumberOrHash = $('#block-input').val();
    web3.eth.getBlock(blockNumberOrHash, function(error, blockInfo) {
      if(error) $("#errors").text(error);
      else {
        $("#block-info").find("#number").text(blockInfo.number);
        $("#block-info").find("#hash").text(blockInfo.hash);
        $("#block-info").find("#parent-hash").text(blockInfo.parentHash);

        $("#block-info").find("#transactions").html("transactions:");
        blockInfo.transactions.forEach(txHash => {
            $("#block-info").find("#transactions").append(`<p>${txHash}</p>`);
        })
      }
    });
};

const getCoinbase = () => {
    $('#coinbase').html(`<b>coinbase: ${web3.eth.coinbase}</b>`);
};

const getDefaultAccount = () => {
    $('#default-account').html(`<b>Default Account: ${web3.eth.defaultAccount}</b>`);
};

const getTransaction = () => {
    let transactionHash = $('#transaction-input').val();
    web3.eth.getTransaction(transactionHash, function(error, transactionInfo) {
      if(error) $("#errors").text(error);
      else {
        $("#transaction-info").find("#hash").text(transactionInfo.hash);
        $("#transaction-info").find("#nonce").text(transactionInfo.nonce);
        $("#transaction-info").find("#block-hash").text(transactionInfo.blockHash);
        $("#transaction-info").find("#block-number").text(transactionInfo.blockNumber);
        $("#transaction-info").find("#gas-usage").text(transactionInfo.gas);
        $("#transaction-info").find("#transaction-index").text(transactionInfo.transactionIndex);
        $("#transaction-info").find("#from").text(transactionInfo.from);
        $("#transaction-info").find("#to").text(transactionInfo.to);
        $("#transaction-info").find("#value").text(transactionInfo.value);
      }
    });
};

$('#accounts-button').click(() => {
    getAccounts();
});

$('#coinbase-button').click(() => {
    getCoinbase();
});

$('#block-button').click(() => {
    getBlock();
});

$('#default-account-button').click(() => {
    getDefaultAccount();
});

$('#transaction-button').click(() => {
    getTransaction();
});

$(document).on('click', '.accounts-button', e => getAccounts(e));
$(document).on('click', '.block-button', e => getBlock(e));
$(document).on('click', '.coinbase-button', e => getCoinbase(e));
$(document).on('click', '.default-account-button', e => getDefaultAccount(e));
$(document).on('click', '.transaction-button', e => getTransaction(e));
