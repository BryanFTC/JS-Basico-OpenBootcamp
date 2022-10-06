// Crea los siguientes archivos JS:

// - factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

function factorialFor(n) {
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total = total * i;
  }
  return total;
}

console.log(factorialFor(10));
