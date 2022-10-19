const persona = {
  nombre: "Bryan",
  edad: 28,
  isDeveloper: true,
  saludo: function () {
    console.log("Hola");
  },
};

// console.log(persona);

const otraPersona = {
  nombre: "Jorge",
  edad: 20,
  isDeveloper: false,
  saludo: function () {
    console.log("Hello");
  },
};

const creaPersona = (nombre, edad, isDeveloper) => {
  return {
    nombre,
    edad,
    isDeveloper,
    saludo: function () {
      console.log("Hello");
    },
  };
};

const nueva_persona = creaPersona("Juan", 23, true);
console.log(nueva_persona);
