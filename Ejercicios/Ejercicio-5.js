// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga tu altura en centímetros (entero)
let altura_cm = 162;
// - Una variable que contenga tu altura en metros (número de coma flotante)
let altura_m = 1.62;
// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso_kg = 85.64;
// - Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaRedondeadaA = altura_m.toPrecision(1);
console.log(alturaRedondeadaA);
// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let alturaRedondeadaB = peso_kg.toFixed(1);
console.log(alturaRedondeadaB);
// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let x = Number.MAX_VALUE;
console.log(x);

let y = x + 1;
console.log(y);
console.log(x == y);
