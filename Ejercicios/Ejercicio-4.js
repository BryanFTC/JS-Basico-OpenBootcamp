// Crea un archivo JS que contenga las siguientes líneas
// - Una cadena de texto con tu Nombre
let nombre = "Bryan";
// - Otra cadena de texto con tu Apellido
let apellido = "Ticona";
// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = nombre.concat(" ", apellido);
console.log(estudiante);
// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toLocaleUpperCase();
console.log(estudianteMayus);
// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudianteMayus.toLocaleLowerCase();
console.log(estudianteMinus);
// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let numeroLetras = estudiante.length;
console.log(numeroLetras);
// - Una variable que contenga la primera letra del Nombre
let pLetNombre = nombre[0];
console.log(pLetNombre);
// - Otra variable que contenga la última letra del Apellido
let ultLetApellido = apellido[apellido.length - 1];
console.log(ultLetApellido);
// - Una cadena de texto que elimine los espacios de la variable "estudiante"
let sinEspacios = estudiante.trim();
console.log(sinEspacios);
// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let estaContenido = estudiante.includes("Bryan");
console.log(estaContenido);
