// Metodos mas utilizados con cadenas de caracteres
// Como obtener la longitud de un string

let str = "Hola soy un string";
console.log(str.length);

// Obtener partes de cadenas de caracteres
// Slice() substring() substr()

let slice_str = str.slice(0, 10);

console.log(slice_str);

let substring_str = str.substring(5, 10);

console.log(substring_str);

let substr_str = str.substr(5, 10);
console.log(substr_str);

// Reemplazar parte del contenido de una cadena de texto

let cadena = "Hola mi nombre es Bryan Bryan";
console.log(cadena);

// Al utilizar strings solo reemplaza la primera instancia
console.log(cadena.replace("Bryan", "Fabian"));
// Al utilizar la expresion regular /g (global), reemplaza todas las instancias
console.log(cadena.replace(/Bryan/g, "Fabian"));


