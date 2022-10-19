class Persona {
  // nombre;
  // edad;
  // isDeveloper;
  // Private -> #
  // Private -> Solo se puede acceder desde dentro de la clase
  #nombre;
  #edad;
  //   #ObtenEdad;

  // Protected -> _
  // Protected -> Solo se puede acceder desde dentro de la clase y desde clases descendientes
  _isDeveloper = true;
  constructor(nombre, edad, isDeveloper) {
    this.#nombre = nombre;
    this.#edad = edad;
    //   this.isDeveloper = isDeveloper;
  }
  saludo() {
    console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} anyos`);
  }

  obtenNombre() {
    // Funcion getter -> Nos permite acceder(de forma controlada) a algun atributo protegido
    return this.#nombre;
  }

  #obtenEdad() {
    return this.#edad;
  }

  getEdad() {
    return this.#edad;
  }

  setEdad(nuevaedad) {
    this.#edad = nuevaedad;
  }
}

const persona = new Persona("Fabian", 30);
// console.log(persona);
// console.log(persona.nombre);
// persona.saludo();
// console.log(persona.obtenNombre());
// console.log(persona.#obtenEdad);
// console.log(persona._isDeveloper);

// Getter -> Metodos que nos permiten obtener atributos/ Metodos privados o protegidos
const edad = persona.getEdad();
console.log(edad);
// Setter -> metodos que no spermiten cambiar el valor de alguno de los atributos privados o protegidos
// Quiero cambiar la edad de la persona
persona.setEdad(34);
console.log(persona.getEdad());
