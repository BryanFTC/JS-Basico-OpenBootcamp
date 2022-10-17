// Introducción a las funciones en JavaScript

// Que son las funciones, como se declaran y como se utilizan

// saludar("Bryan")

function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

//
let nombre_2 = "Pedro";

despedir(nombre_2);
function despedir(nombre) {
  console.log(`Adios ${nombre}`);
}

//

let persona = { nombre: "Juan", apellido: "Gonzales" };

saludarPersona(persona);

function saludarPersona(objeto) {
  console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

//

function imprimeNumero(num = 7) {
  //Parametros por defectos
  console.log(num);
}

imprimeNumero();

///////////

function imprimir(...parametros) {
  console.log(parametros);
}

imprimir(1, 2, 3, 4, "Hola", { id: 4 });

/////

function suma(...nums) {
  return nums.reduce((a, b) => a + b);
}

const s = suma(1, 2, 3, 4, 5);

console.log(s);

///////

function multiplicar(a = 0, b = 0) {
  return a * b;
}

console.log(multiplicar(4, 9));
