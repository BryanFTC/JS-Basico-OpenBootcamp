// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
function fibo(num) {
  if (num <= 0) return 0;
  var fibonacci = [1, 1];
  for (var i = 2; i < num; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci;
}

// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función
const fib = fibo(6);
console.log(fib);
