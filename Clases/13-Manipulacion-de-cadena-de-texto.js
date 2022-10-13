// Metodos de cadenas de texto
let input = "SAgitario";
let db = "sagitario";

// toLowerCase() -- toUpperCase()
console.log(input.toLowerCase() === db);

// Formas de concatenar dos cadenas de caracteres

let str_1 = "Hola spy la primera cadena.";
let str_2 = "Y yo soy la segunda cadena";

console.log(str_1.concat(" ", str_2));
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`);

// Eliminar espacios al inicio y al final

let str_3 = "   Hola soy un strin con espacios al final.   ";
console.log(str_3.length);

// trim()
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

// Obtener el caracter que hay en cierta posicion
let str_4 = "Hola soy el string numero 4";

console.log(str_4.charAt(5));
console.log(str_4[5]);

// Obtener la posicion de una palabra dentro de una cadena de caracteres

let str_5 = "hola soy Bryan y me gusta el anime. Mi nombre es Bryan";
console.log(str_5.indexOf("Bryan"));
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf("Bryan"));
