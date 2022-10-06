// TEMA 3
// Estructuras de control
// -Bifurcaciones:
// --if-else
let saldo = 50;
let efectivo = 100;
if (efectivo < saldo) {
  console.log("Puedes sacar dinero");
}

if (efectivo < saldo) {
  console.log("Puedes sacar dinero");
} else {
  console.log("Saldo insuficiente");
}

// if else + if else
let nota = 5;
if (nota === 5) {
  console.log("Enhorabuena, has obtenido un sabresaliente");
} else if (nota === 4) {
  console.log("Buen trabajo, pero podrias mejoras");
} else if (nota === 3) {
  console.log("Has obtenido un suficiente");
}

// Sentencias switch

switch (nota) {
  case 5:
    console.log("Enhorabuena, has obtenido un sabresaliente");
    break;
  case 4:
    console.log("Buen trabajo, pero podrias mejoras");
    break;

  default:
    console.log("Error");
    break;
}
