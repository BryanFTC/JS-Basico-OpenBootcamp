// Funciones generadoras

function* generaId() {
  let id = 0;
  while (true) {
    id++;
    if (id === 10) {
      return id;
    }
    yield id; //Esperando hasta que se vuelva a lamar
  }
}

const gen = generaId();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
