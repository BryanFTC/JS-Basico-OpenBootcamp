// Metodos de cadenas de texto (parte 3)
// https://regexr.com

let texto_largo =
  "A.S. (Ad Stella) 122- Una época en la que una multitud de corporaciones han entrado en el espacio y han construido un enorme sistema económico. Una chica solitaria del remoto planeta Mercurio se traslada a la Escuela de Tecnología de Asticassia dirigida por el Grupo Beneritt, que domina la industria de los trajes móviles. Su nombre es Suletta Mercury.";

console.log(texto_largo.match(/en/g));

// Existe la palabra en el texto?
console.log(texto_largo.includes("Mercury"));

// Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("A"));

// Saber si un texto termina con otra palabra
console.log(texto_largo.endsWith("Mercury."));
