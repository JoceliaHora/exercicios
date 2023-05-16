var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var list = lines[0].split(" ");
var list2 = lines[1].split(" ");

var valorPecas = parseFloat(list[2]);
var valorPecas2 = parseFloat(list2[2]);
var quant = parseFloat(list[1]);
var quant2 = parseFloat(list2[1]);

valorPecas = valorPecas * quant ;
valorPecas2 = valorPecas2 * quant2;
var total = valorPecas  + valorPecas2;

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));