var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var salario = parseFloat(lines[1]);
var comissao = parseFloat(lines[2]);

var calculo = (comissao * 15) / 100 ;
var total = calculo + salario;

console.log("TOTAL = R$ " + total.toFixed(2));