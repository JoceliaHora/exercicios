var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var n1 = parseInt(lines[0]);
var n2 = parseInt(lines[1]);
var PROD = n1 * n2;
console.log('PROD = ' + PROD);
