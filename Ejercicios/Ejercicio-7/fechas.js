// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
const fechaHoy = new Date();
console.log(fechaHoy);
// - La fecha de tu nacimiento
const fechaNac = new Date(1993, 11, 8);
console.log(fechaNac);
// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let comparacion = fechaHoy.getTime() > fechaNac.getTime();
console.log(comparacion);
// - Una variable que contenga el día de tu nacimiento
let diaNac = fechaNac.getDate();
console.log(diaNac);
// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let mesNac = fechaNac.getMonth();
console.log(mesNac);
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let anyoNac = fechaNac.getFullYear();
console.log(anyoNac);
