// Listas, array o arreglo
const lista = [1, "hola", true, null];
const lista2 = new Array(1, "hola", true, null);
const lista3 = new Array(3);
lista3[0] = "soy el primer elemento";
const lista4 = [lista, lista2];
console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// Objetos

const movil = {
  altura: 10,
  anchura: 5,
  marca: "Sony",
  isWhite: false,
  tarjeta: {
    marca: "kingston",
    alamacenamiento: 32,
  },
};

movil.anyo = 2019;
movil.marca = "Samsung";

console.log(movil.marca);

// Fechas
// Librerias de apoyo

const ahora = new Date();
console.log("ahora :>> ", ahora);

const fecha_milis = new Date(10);
console.log("fecha_milis :>> ", fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log("fecha_cadena :>> ", fecha_cadena);

const fecha_valores = new Date(2022, 0, 15);
console.log("fecha_valores :>> ", fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth();
const anyo = ahora.getFullYear();

console.log("dia, mes, anyo :>> ", dia, mes, anyo);
