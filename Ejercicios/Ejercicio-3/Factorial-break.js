// factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

function factorialBreak(n) {
  var total = n;

  while (n) {
    if (n === 0 || n === 1) {
      break;
      return 1;
    }
    n--;
    total *= n;
  }

  return total;
}

console.log(factorialBreak(10));
