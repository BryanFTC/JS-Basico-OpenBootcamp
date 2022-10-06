// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

function factorialWhile(n) {
  var total = n;

  while (n > 1) {
    n--;
    total *= n;
  }

  return total;
}

console.log(factorialWhile(10));
