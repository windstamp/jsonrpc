// https://github.com/ethereum/wiki/wiki/JavaScript-API

var Web3 = require('web3');

//var rpcUrl = "http://localhost:7545";
var rpcUrl = "http://192.168.60.12:7545";

const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);

var topic1 = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';  // 函数签名（还不知道怎么具体计算？），32字节
var topic2 = '0x0000000000000000000000001d31f7400ee8c6d4079d8dd9687d61bd28356610';  // address: 0x1d31f7400ee8c6d4079d8dd9687d61bd28356610，20字节地址左边补充0为32字节
var topic3 = '0x0000000000000000000000008846acfbca6cdb0e6c10ccb536b343361a26fe40';  // address: 0x8846acfbca6cdb0e6c10ccb536b343361a26fe40，20字节地址左边补充0为32字节

console.log('----- Test filter with options topics -----');

// 测试多个topic
// 由topics中的topic的或操作构成
var options = {topics : [topic1, topic2, topic3]};
var filter_options = web3.eth.filter(options);

filter_options.watch(function(error, result) {    
    console.log('\n----- filter_options.watch -----');
    console.log('topic1: ', topic1);
    console.log('topic2: ', topic2);
    console.log('topic3: ', topic3);

    if (error) {
        console.log('error: ', error)
        return;
    }

    // console.log('result: ', result);
    console.log('log info {')
    console.log('\tlogIndex: ', result.logIndex);
    console.log('\ttransactionHash: ', result.transactionHash);
    console.log('\ttransactionIndex: ', result.transactionIndex);
    console.log('\tblockHash: ', result.blockHash);
    console.log('\tblockNumber: ', result.blockNumber);
    console.log('\taddress: ', result.address);
    console.log('\tdata: ', result.data);
    console.log('\ttype: ', result.type);

    console.log('\ttopics:')
    result.topics.forEach(function(topic, i){
        console.log('\t\ttopics[', i, ']', topic);
    });

    console.log('}');

    // 停止监听
    console.log('----- stop watching -----');
    filter_options.stopWatching();
});

filter_options.get(function(error, logs){  
    console.log('\n----- filter_options.get -----');
    console.log('topic1: ', topic1);
    console.log('topic2: ', topic2);
    console.log('topic3: ', topic3);

    if (error) {
        console.log('error: ', error)
        return;
    }

    // console.log('result: ', logs);
    console.log('logs [');
    logs.forEach(function(log, i) {
            console.log('\tlog[', i, '] {');
            console.log('\t\tlogIndex: ', log.logIndex);
            console.log('\t\ttransactionHash: ', log.transactionHash);
            console.log('\t\ttransactionIndex: ', log.transactionIndex);
            console.log('\t\tblockHash: ', log.blockHash);
            console.log('\t\tblockNumber: ', log.blockNumber);
            console.log('\t\taddress: ', log.address);
            console.log('\t\tdata: ', log.data);
            console.log('\t\ttype: ', log.type);
        
            console.log('\t\ttopics:')
            log.topics.forEach(function(topic, i){
                console.log('\t\t\ttopics[', i, ']', topic);
            });
        
            console.log('\t}');
    });
    console.log(']');
});
