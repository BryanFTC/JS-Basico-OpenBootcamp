// localStorage.setItem("nombre", "Bryan")

console.log(localStorage.getItem("nombre"));

// localStorage.setItem("persona",JSON.stringify({ nombre: "Raul", edad: 30}))

console.log(JSON.parse(localStorage.getItem("persona")));

// JSon.stringify --> Convierte un objeto/array en string
// JSON.parse --> Convierte un objeto/array convertido atraves de stringify en un objeto de JS

localStorage.removeItem("nombre");

sessionStorage.setItem("nombre-sesion", "Fabian");

// Cookies

document.cookie = "nombreCookie = BryanCookie";
document.cookie =
  "nombreCaducidad=Nombre;expires =" + new Date(2023, 0, 1).toUTCString();

console.log(document.cookie);
