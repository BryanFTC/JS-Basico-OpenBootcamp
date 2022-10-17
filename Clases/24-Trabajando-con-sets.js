// Trabajando con Sets

// Sets o conjuntos
// Set solo almacena valores unicos
// Sets no permiten almacenar elementos que ya existen

const array = [1, 2, 3, 4, 5, "hola"];

const miSet = new Set(array);

console.log(array);
console.log(miSet);

// .add()

miSet.add(9);
console.log(miSet);

// .delete

miSet.delete("hola");
console.log(miSet);

// .clear()
// miSet.clear()

// .has()
console.log(miSet.has(40));

// .size
console.log(miSet.size);

miSet.forEach((valor) => {
  console.log(valor);
});

const it_miSet = miSet.values();
console.log(it_miSet);

const ar_miSet = [...miSet];
console.log(ar_miSet[1]);
