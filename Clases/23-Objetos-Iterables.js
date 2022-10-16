// Identificar si existe un valor en un array y objetos iterables

// .some()

const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2];

const res = array.some((valor) => valor < -0);
console.log(res);

const listaObjetos = [
  { nombre: "Leo", edad: 35 },
  { nombre: "Laura", edad: 34 },
  { nombre: "Miguel", edad: 24 },
  { nombre: "Lucia", edad: 3 },
  { nombre: "Ana", edad: 29 },
];

const existeJuan = listaObjetos.some((persona) => persona.nombre === "Juan");

console.log(existeJuan);

// Como obtener una lista a partir de un objeto iterable

const str = "Hola soy Bryan";
console.log(str[5]);

const ar_str = Array.from(str);
console.log(ar_str);

const set = new Set([2, 3, "hola", 4]);
const ar_set = Array.from(set);
console.log(ar_set);

const keys = array.keys();

console.log(keys);

const ar_keys = Array.from(keys);
console.log(ar_keys);
