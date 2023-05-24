var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var list = lines[0].split(" ");
var A = parseFloat(list[0]);
var B = parseFloat(list[1]);
var C = parseFloat(list[2]);

var maior = Math.max(A, B, C)
console.log(maior + " eh o maior");