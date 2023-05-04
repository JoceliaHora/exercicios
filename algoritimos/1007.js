var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var A = lines[0];
var B = lines[1];
var C = lines[2];
var D = lines[3];



console.log("DIFERENCA = " + (A * B - C * D));
