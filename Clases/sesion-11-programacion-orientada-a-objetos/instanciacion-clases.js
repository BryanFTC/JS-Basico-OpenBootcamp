class Persona {
  nombre;
  edad;
  isDeveloper;
  constructor(nombre, edad, isDeveloper) {
    this.nombre = nombre;
    this.edad = edad;
    this.isDeveloper = isDeveloper;
  }
  saludo() {
    console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} anyos`);
  }
}

const nueva_persona = new Persona("Bryan", 27, true);

console.log(nueva_persona);
nueva_persona.saludo();

let numero = 60; //inicializar
let persona_2 = new Persona("Laura", 34, false); //instanciar
console.log(typeof persona_2);
console.log(persona_2 instanceof Persona);
// instanceof -> similar a typeof pero para clases
