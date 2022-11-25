/************EVENTO DEL MOUSE************************/
//Mostrar mensaje en un alert --> Referido a la funcion
const alerta = document.querySelector(".boton");
function mostrarAlerta() {
    alert("Hola gei")
}
alerta.addEventListener("click", mostrarAlerta);
//Mostar mensaje en una consola --> Escribir una funcion anonima
const consola = document.querySelector(".boton2");

consola.addEventListener("click", () => {
    console.log("Hola mi pana")
})
//Agregar clase a un elemento
const modoOscuro = document.querySelector(".boton3");
const body = document.body;

modoOscuro.addEventListener("click", cambiarDeColor);

function cambiarDeColor(){
    body.classList.toggle("modo-oscuro");

    if(body.classList.contains("modo-oscuro")) {
        modoOscuro.innerText = "Luz";
    } else {
        modoOscuro.innerText = "Oscuro";
    }
}
/************************EVENTO INPUT**************************/
//Mostrar Input en alerta
const alertaForm = document.querySelector(".grupo2");
const alertaInput = document.querySelector(".input");

alertaForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert(alertaInput.value);
    alertaForm.reset()
});
//Mostrar lo escrito por fuera de un Input
const abajoInput = document.querySelector(".input2");
const abajoYa = document.querySelector(".abajo");

abajoInput.addEventListener(/*"input"*/"change", () => {
    abajoYa.innerText = abajoInput.value;
});
/************************Storage***************************/
//Guardando elementos en el almacenamiento
localStorage.setItem("iva", 21);
localStorage.setItem("nombre", "Kevin");

let usuario = "Kevincio";
localStorage.setItem("usuario", usuario);

let usuarioStorage = localStorage.getItem("usuario");
console.log(usuarioStorage);

let usuarioIngresado = prompt("Ingrese su nombre de usuario");
localStorage.setItem("usuario ingresado", usuarioIngresado);
let usuarioIngresadoStorage = localStorage.getItem("usuario ingresado");
console.log(usuarioIngresadoStorage);

const perfil = {
    nombre: "Kevin",
    edad: 19
};
//Opcion 1 stringify (convierte en string)
const perfilJSON = JSON.stringify(perfil);
console.log(perfilJSON);

localStorage.setItem("perfil", perfilJSON);

//Opcion2 stringify
localStorage.setItem("perfil", JSON.stringify(perfil));

//Opcion 1 parse (convierte en objeto)
const perfilObejeto = JSON.parse(perfilJSON);
console.log(perfilObejeto);

//Opcion 2 parse
const perfilEnLS = JSON.parse(localStorage.getItem("perfil"));
console.log(perfilEnLS);