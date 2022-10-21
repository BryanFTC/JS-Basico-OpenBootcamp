const boton = document.querySelector("#btn");

console.log(boton);

boton.addEventListener("click", () => {
  // alert("Se ha hecho click")
  // confirm("Estas de acuerdo?")
  // ? console.log("OK")
  // : console.log("No!!")
  const respuesta = confirm("seguro?");
  if (respuesta) {
    console.log("Estas de acuerdo");
  } else {
    console.log("NO estas de acuerdo");
  }
});

const botonInfo = document.querySelector("#info");
botonInfo.addEventListener("click", () => {
  const nombre = prompt("Cual es tu nombre?");
  if (nombre){
    console.log("Tu nombre es " + nombre);
  } else {
    console.log("No has introducido nada");
  }
  
});


const lista = [{
    nombre: "Bryan",
    edad: 28
}, {
    nombre: "Juan",
    edad: 30
}, {
    nombre: "Jorge",
    edad: 34
}]

console.table(lista);