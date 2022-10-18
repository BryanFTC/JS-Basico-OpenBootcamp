// Crea un nuevo proyecto de Node--OK

// - Instala la dependencia Winston--Ok

// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
const miFuncion = (val) => {
  if (typeof val === "number") {
    return 2 * val;
  }
  // return false;
  throw new Error("El valor debe ser un numero");
};

console.log(miFuncion("d"));
// - Registra el error en un archivo a través de un try...catch
try {
  // Codigo que puede fallar
  console.log("Esta ejecutandose de manera correcta");
  const doble = miFuncion(numero);
  console.log(doble);
} catch (e) {
  // En caso de fallar, quiero que ejecutes
  console.error(`El valor de e es:${e}`);
  console.error("ERROR!");
}
