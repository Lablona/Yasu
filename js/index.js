/*let nombre = "Kevin";
let apellido = "Lablona";
let nombreCompleto = `Hola ${nombre} ${apellido} bienvenido`;
console.log(nombreCompleto);*/

/*let edad = 5;
console.log(edad);

let numeroUno = 10;
let numeroDos = 20;

let resultadoSuma= 10 + 20;

console.log("resultado de suma", resultadoSuma);

let nombreUsuario = prompt("Ingrese su nombre");
console.log(nombreUsuario);
alert ("Hola " + nombreUsuario + ".");

if(nombreUsuario === "Kevincio") {
    alert("Que tal?");
 } else {
    alert("Altoque");
 }*/

//******************************DOM***********************************//
/*console.log(contenido.classList);

contenido.classList.add("xd2");
console.log(contenido.classList);

contenido.classList.remove("cata");
console.log(contenido.classList);

console.log(contenido.innerHTML);
console.log(contenido.innerText);*/

const contenido = document.querySelector(".cata");
console.log(contenido);
const contenido2 = document.querySelector(".oracion");
console.log(contenido2);
const link = document.querySelectorAll(".link");
console.log(link);
const celulares = document.querySelectorAll(".lista");
console.log(celulares);

console.log(contenido2.innerHTML);

console.log(celulares[0].innerHTML);
console.log(celulares[1].innerHTML);
console.log(celulares[2].innerHTML);
console.log(celulares[3].innerHTML);

const frase = document.querySelector(".frase");

let ingrese = prompt("Donde vamos?");

if (ingrese === "carrito") {
   frase.innerHTML = "<h1>Bienvenido al carrito<h1>"
} else if (ingrese === "favoritos") {
   frase.innerHTML = "<h1>Bienvenido a favoritos<h1>"
} else {
   frase.innerHTML = "<h1>No se a donde quieres ir<h1>"
}

let frase2 = document.querySelector(".frase2");
frase2.innerHTML = "<h1>haciendo pruebas<h1>";
document.body.append(frase2);

//Listas de venta
let listaDePantallas = document.querySelector(".listaDePantallas");

const pantallas = [
   {id: 1, clase: "TV", precio: 1000},
   {id: 2, clase: "Monitor", precio: 500},
   {id:3, clase: "Mini", precio: 250}
];

pantallas.forEach(pantalla => {
   let div1 = document.createElement("div");
   div1.innerHTML = `
   <h2>${pantalla.clase}</h2>
   <h4>${pantalla.id}</h4>
   <h6>$${pantalla.precio}</h6>
   `;
   listaDePantallas.appendChild(div1);
})

