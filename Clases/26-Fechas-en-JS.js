// Fechas en JavaScript

const fecha = new Date();

console.log(fecha);

// Atencion - los meses inicalizan en 0 (0-Enero, 11- Diciembre)
const fecha2 = new Date(1993, 11, 8, 1, 23, 52, 192);
console.log(fecha2);

const fecha3 = new Date(1000000000000); //Milisegundos
console.log(fecha3);

const fecha4 = new Date("December 8, 1993 12:15:15");
console.log(fecha4);

const fecha5 = new Date(1993, 11, 8, 1, 23, 52, 192);
console.log(fecha5);

console.log(fecha2 === fecha5); //Error - No se pueden comparar fechas de esta manera

console.log(fecha2.getTime() === fecha5.getTime()); //OK - Esta es la forma de comparar la igualdad entre fechas

// Obtener el dia, el mes y el anyo de una fecha
// Obtener el dia .getDate()

console.log(fecha2.getDate());

// Obtener el mes .getMonth() (0-Enero, 11-December)

console.log(fecha5.getMonth() + 1);

// Obtener el anyo .getFullYear()
console.log(fecha2.getFullYear());

console.log(fecha2);

// .toLocalDateString
console.log(fecha2.toLocaleDateString());
