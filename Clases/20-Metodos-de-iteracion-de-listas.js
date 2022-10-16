// Métodos de iteración en listas
// Iterar los valores de una lista
const array = ["hola", 2, 5, 98, false, undefined];

// Forma antigua(poco eficiente)
for (let i = 0; i < array.lengt; i++) {
  console.log(array[i]);
}

// Forma ES6(mas eficiente) .forEach()
let suma = 0;
const arrayNums = [3, 5, , 6, 7, 8, 93, 97];
arrayNums.forEach((valor) => {
  suma += valor;
  console.log(valor);
});
console.log(suma);

// Busqueda de un valor dentro de una lista .find()
// Quiero encontrar el elemnto 90
const variable = array.find((valor) => {
  if (valor === 98) {
    return true;
  }
});

console.log(variable);

const listaObjetos = [
  { nombre: "Leo", edad: 35 },
  { nombre: "Laura", edad: 34 },
  { nombre: "Miguel", edad: 24 },
  { nombre: "Lucia", edad: 3 },
  { nombre: "Ana", edad: 29 },
];

const objeto = listaObjetos.find((o) => o.nombre === "Miguel");
console.log(objeto.edad);

const { edad } = listaObjetos.find((o) => o.nombre === "Ana");
console.log(edad);
