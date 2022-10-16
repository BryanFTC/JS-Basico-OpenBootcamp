// Ordenación de listas y comparación entre dos listas
// .sort() -> MODIFICA EL ARRAY
const array = [2, 5, 9, 15, 1, 2, 0, 4];
console.log(array);

array.sort((a, b) => {
  if (a < b) {
    return +1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(array);

// ordenar unicamente arrays numericos

const arrayNumerico = [4, 1, 7, 3, 1, 3, 56, 1, 546];

arrayNumerico.sort((a, b) => b - a);
console.log(arrayNumerico);

// Interesante en arrays de objetos

const listaObjetos = [
  { nombre: "Leo", edad: 35 },
  { nombre: "Laura", edad: 34 },
  { nombre: "Miguel", edad: 24 },
  { nombre: "Lucia", edad: 3 },
  { nombre: "Ana", edad: 29 },
];

// listaObjetos.sort((a,b)=>{
//     if(a.edad <b.edad){
//         return -1
//     } else if (a.edad > b.edad){
//         return +1
//     } else {
//         return 0
//     }
// })
listaObjetos.sort((a, b) => a.edad - b.edad);

console.log(listaObjetos);

// Como comparar listas
// .every()

const array2 = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40];

// const resultado = array2.every((valor) => {
//   if (typeof valor === "number") {
//     return true;
//   } else {
//     return false;
//   }
// });
const resultado = array2.every((valor) => valor > 0);

console.log(resultado);

// Comparacion de listas
const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];

console.log(ar1 === ar2);

const compararArrays = (array_1, array_2) => {
  if (array_1.length !== array_2.length) return false;
  const res = array_1.every((valor, i) => valor === array_2[i]);
  return res;
};

console.log(compararArrays(ar1, ar2));

const ar3 = [1, 2, 3, 9];

console.log(compararArrays(ar1, ar3));
