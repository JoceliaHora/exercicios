var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var num1 = lines[0];
var num2 = lines[1];
var num3 = lines[2];

let horas = num3 * num2;



// dividir a quantidade de horas que você trabalha no mês pelo salário que recebe
console.log("NUMBER = " + num1);
console.log("SALARY = U$ " + horas.toFixed(2));
