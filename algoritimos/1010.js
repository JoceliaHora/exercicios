var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

/* var peca1 = parseInt(lines[0]); codigo da peca*/
var numeroDePecas1 = parseFloat(lines[0, 1]);
var valorUnitario1 = parseFloat(lines[0,2]);

/* var peca2 = parseInt(lines[1,0]); codigo da peca*/
var numeroDePecas2 = parseInt(lines[1,1]);
var valorUnitario2 = parseFloat(lines[1,2]); 

/* let pecas1 = parseInt(peca1 + numeroDePecas1 + valorUnitario1);
let pecas2 = parseInt(peca2 + numeroDePecas2 + valorUnitario2);
 */
console.log("VALOR A PAGAR: R$" +  numeroDePecas1);