const interface = require('readline-sync');


var calculator = require('./app/calculator');
const firstNumber = interface.question("Ingrese el primer número: ");
const secondNumber = interface.question("Ingrese eel segundo número: ");

var a = parseInt(firstNumber);
var b = parseInt(secondNumber);

console.log('Add ${a} + ${b}=${calculator.add(a,b)}');

console.log(`Add ${a} + ${b} = ${calculator.add(a, b)}`);
console.log(`Minus ${a} - ${b} = ${calculator.minus(a, b)}`);
console.log(`Multiply ${a} * ${b} = ${calculator.multiply(a, b)}`);
console.log(`Divide  ${a} / ${b} = ${calculator.divide(a, b)}`);


