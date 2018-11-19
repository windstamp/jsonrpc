var BigNumber = require('bignumber.js');

console.log('Test big numbers in web3.js');

var value = "101010100324325345346456456456456456456";
console.log('\nvalue: ', value);

var value = 101010100324325345346456456456456456456;
console.log('\nvalue: ', value);

var balance = new BigNumber('131242344353464564564574574567456');
// console.log('\nbalance: ', balance);
// console.log('\nbalance: ', balance.toNumber());
console.log('\nbalance: ', balance.toString(10));

var balance = balance.plus(21).toString(10);
console.log('\nbalance: ', balance);

var balance = new BigNumber('13124.234435346456466666457455567456');
// console.log('\nbalance: ', balance);
// console.log('\nbalance: ', balance.toNumber());
console.log('\nbalance: ', balance.toString(10));

var balance = balance.plus(21).toString(10);
console.log('\nbalance: ', balance);
