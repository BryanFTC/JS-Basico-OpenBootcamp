// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una clase llamada "Estudiante" que tenga:
class Estudiante {
  // - Una variable llamada nombre
  nombre = "Jorge";
  // - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
  asignaturas = ["Javascript", "HTML", "CSS"];

  // - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
  obtenDatos() {
    return {
      nombre: this.nombre,
      asignaturas: this.asignaturas,
    };
  }
}
// - Crea una nueva instancia de "Estudiante"
const new_student = new Estudiante();
console.log(new_student);
// - Haz la llamada al método obtenDatos
console.log(new_student.obtenDatos());
