var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);

const media = (A * 3.5 + B * 7.5) / 11

console.log("MEDIA = " + media.toFixed(5)); 

//Media de notas, soma das duas notas e divide pela quantidade de vezes que foram realidazas ex?: 5, 10, >>> 15/2