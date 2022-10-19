// Herencia y Polimorfismo
// Inheritance - Herencia
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    //   this.isDeveloper = isDeveloper;
  }
  saludo() {
    console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} anyos`);
  }
}

class Desarrollador extends Persona {
  constructor(nombre, edad, lenguaje) {
    super(nombre, edad);
    this.lenguaje = lenguaje;
  }

  saludo() {
    //Override
    super.saludo();
    console.log(`Y soy desarrollador de ${this.lenguaje}`);
  }
}

const nuevodev = new Desarrollador("Bryan", 24, "Python");
console.log(nuevodev);
nuevodev.saludo();

// Polimorfismo => Varias formas
