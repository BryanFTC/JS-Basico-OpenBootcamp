// Formas de importar/exportar modulos
// 1. CommonJS - require
// 2. Import ES6 - import

const { factorial, suma } = require("./modulos/matematicas.js");
// function suma(a, b) {
//   return a + b;
// }
// function multiplica(a, b) {
//   return a ** b;
// }
// function factorial(a) {
//   let factorial = 1;
//   for (let i = 1; i <= a; i++) {
//     factorial *= i;
//   }
//   return factorial;
// }

const fact = factorial(5);
console.log(fact);

const sum = suma(5, 6);
console.log(sum);
