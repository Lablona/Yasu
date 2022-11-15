/*let nombre = "Kevin";
let apellido = "Lablona";
let nombreCompleto = `Hola ${nombre} ${apellido} bienvenido`;
console.log(nombreCompleto);*/

let edad = 5;
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
 }

//DOM

const contenido = document.querySelector(".cata");
console.log(contenido);
const contenido2 = document.querySelector(".oracion");
console.log(contenido2);
const link = document.querySelectorAll(".link");
console.log(link);
const celulares = document.querySelectorAll(".lista");
console.log(celulares);

/*console.log(contenido.classList);

contenido.classList.add("xd2");
console.log(contenido.classList);

contenido.classList.remove("cata");
console.log(contenido.classList);

console.log(contenido.innerHTML);
console.log(contenido.innerText);

link[0].innerText = "Hola, te superé";*/

console.log(contenido2.innerHTML);
console.log(celulares[0].innerHTML);
console.log(celulares[1].innerHTML);
console.log(celulares[2].innerHTML);
console.log(celulares[3].innerHTML);



