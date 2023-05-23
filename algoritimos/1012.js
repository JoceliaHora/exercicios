var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');


var list = lines[0].split(" "); //aprofuntar estudo no split
var A = parseFloat(list[0]);
var B = parseFloat(list[1]);
var C = parseFloat(list[2]);

//area do triangulo
var triRet = (A * C) /2;

//area do circulo raio
var pi = 3.14159;
var area = pi * (C**2)
var areaCirculo = (4/3) * pi * Math.pow(C, 3) ;

//area do trapezio
var somaBases = (A + B) * C / 2;

//area do quadrado 
var areaQuadrado = Math.pow(B, 2)

//area do retangulo
var areaRetangulo =  A * B;

console.log("TRIANGULO: " + triRet.toFixed(3) )
console.log("CIRCULO: " + area.toFixed(3) )
console.log("TRAPEZIO: " + somaBases.toFixed(3) )
console.log("QUADRADO: " + areaQuadrado.toFixed(3));
console.log("RETANGULO: " + areaRetangulo.toFixed(3));

