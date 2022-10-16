// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaCompra = ["apio", "cebolla", "tomate", "papas", "huevos"];
console.log(listaCompra);
// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol");
console.log(listaCompra);
// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop();
console.log(listaCompra);
// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let pelisFav = [
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
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let post2010 = pelisFav.filter((obj) => obj.fecha > 2010);
console.log(post2010);
// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
let directores = pelisFav.map((obj) => obj.director);
console.log(directores);
// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
let titulos = pelisFav.map((obj) => obj.titulo);
console.log(titulos);
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let lista1 = directores.concat(titulos);
console.log(lista1);
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let lista2 = [...directores, ...titulos];
console.log(lista2);
