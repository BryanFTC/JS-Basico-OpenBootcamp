// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
let datos = {
  nombre: "Bryan",
  apellido: "Ticona",
  edad: 28,
  altura: "162 cm",
  isDeveloper: true,
};
console.log(datos);

// - Una variable que obtenga tu edad a partir del objeto anterior
let edad = datos.edad;
console.log(edad);
// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

const lista = [
  { ...datos },
  {
    nombre: "Juan",
    apellido: "Chaparro",
    edad: 29,
    altura: "175 cm",
    isDeveloper: false,
  },
  {
    nombre: "Jorge",
    apellido: "Paredes",
    edad: 33,
    altura: "172 cm",
    isDeveloper: false,
  },
];

console.log(lista);

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

let newLista = lista.sort((a, b) => b.edad - a.edad);
console.log(newLista);
