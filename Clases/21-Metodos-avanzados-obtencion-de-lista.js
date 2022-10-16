// Métodos avanzados, obtención de listas a partir de listas
// .map() .filter() .reduce()
const array = ["Arequipa", "Puno", "Moquegua", "Tacna"];

const val = array.forEach((v) => {
  console.log(v);
  return 4;
});
console.log(val);

const newArray = array.map((valor, indice) => {
  return `${indice + 1}-${valor}`;
});

console.log(newArray);

const listaObjetos = [
  { nombre: "Leo", edad: 35 },
  { nombre: "Laura", edad: 34 },
  { nombre: "Miguel", edad: 24 },
  { nombre: "Lucia", edad: 3 },
  { nombre: "Ana", edad: 29 },
];

// const personasMayores = listaObjetos.filter(obj => {
//     if(obj.edad>30) {
//         return true
//     } else {
//         return false
//     }
// })
const personasMayores = listaObjetos.filter((obj) => obj.edad > 30);
console.log(personasMayores);

const nuevaLista = listaObjetos.filter((obj) => obj.nombre !== "Miguel");
console.log(nuevaLista);

const valores = [3, 56, 23, 5, 90, 100];

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
  console.log(acumulado);
  console.log(cur);
  console.log(i);
  console.log(arrayOriginal);
  return acumulado + cur;
});

console.log(suma);
