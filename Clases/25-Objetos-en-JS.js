// Objetos en JavaScript

// Trabajando con objetos

const obj = {
  id: 4,
  nombre: "Fabian",
  apellido: "Gonzales",
  isDeveloper: false,
  libros_favoritos: ["El metodo", "El codigo de la manifestacion"],
  "4-juegos": [1, 2, 3, 4],
};

console.log(obj.id);
console.log(obj["4-juegos"]);

const prop = "isDeveloper";
console.log(obj[prop]);

const obj2 = obj;
console.log(obj2);

obj2.nombre = "Perez";
console.log(obj2.nombre);

console.log(obj.nombre);

let val1 = 4;
let val2 = val1;

val2 = 6;

console.log(val1);
console.log(val2);

const obj3 = { ...obj };

console.log(obj.nombre);
console.log(obj3.nombre);

// Como ordenar listas de objetos en funcion de una propiedad

let listaPeliculas = [
  {
    titulo: "El Señor de los Anillos: las dos torres",
    director: "Peter Jackson",
    fecha: 2002,
  },
  {
    titulo: "El hobbit: la batalla de los Cinco Ejércitos",
    director: "Peter Jackson",
    fecha: 2014,
  },
  {
    titulo: "Batman: El caballero de la noche",
    director: "Christopher Nolan",
    fecha: 2008,
  },
];

console.log(listaPeliculas);

// .sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL

listaPeliculas.sort((a, b) => a.fecha - b.fecha);
console.log(listaPeliculas);
