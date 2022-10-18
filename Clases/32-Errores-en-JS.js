// Errores en JavaScript

const miFuncion = (val) => {
  if (typeof val === "number") {
    return 2 * val;
  }
  // return false;
  throw new Error("El valor debe ser de tipo numero");
};

console.log(miFuncion("d"));

try {
  // Codigo que puede fallar
  console.log("Esta ejecutandose de manera correcta");
  const doble = miFuncion(numero);
  console.log(doble);
} catch (e) {
  // En caso de fallar, quiero que ejecutes
  console.error(`El valor de e es:${e}`);
  console.error("ERROR!");
} finally {
  console.log(
    "Esto se va ejecutar si se produce algun error, como si no existe ninguno"
  );
}

// InternalError, SyntaxError, TypeError, RangeError y ReferenceError
