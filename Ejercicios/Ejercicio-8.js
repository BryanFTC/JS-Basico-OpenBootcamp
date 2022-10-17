// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"
function sinParametro() {
  return true;
}

console.log(sinParametro());

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
async function promesa() {
  return setTimeout(() => console.log("Hola soy una promesa"), 5000);
}
console.log(promesa());

// - Una función generadora de índices pares automáticos
function* generaIndicesPares() {
  let id = 0;
  while (true) {
    yield (id += 2);
  }
}

const gIP = generaIndicesPares();

console.log(gIP.next().value);
console.log(gIP.next().value);
