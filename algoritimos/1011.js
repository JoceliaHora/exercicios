var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');


var R = parseFloat(lines[0]);
var pi = 3.14159;
var ex = Math.pow(R, 3);
var calculo = (4/3) * pi * ex;


console.log("VOLUME = " + calculo.toFixed(3));