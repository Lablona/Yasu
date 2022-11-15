//ABTRACCION
/*function sumarRango(min, max) {
    let total = 0;

    for (let i = min; i <= max; i++) {
        total = total + i;
    }
    
    return total;
}

console.log(sumarRango(1, 10));
console.log(sumarRango(3, 7));

let sumaDeTresYSiete = sumarRango(3, 7);
console.log(sumaDeTresYSiete)*/

//RETORNO DE FUNCIONES
/*function mayorQue(x) {
    return (num) => num > x;
}

const mayorQueDiez = mayorQue(10);
const mayorQueVeinte = mayorQue(20);

console.log(mayorQueVeinte(19));*/

/**************METDOS DE BUSQUEDA Y TRANFORMACION**************/

const numeros = [10, 20, 30, 70 , 50];
const animales = ["Cebra", "Elefante", "Jirafa"];
const productos = [
    {nombre: "Mesa", precio: 2000},
    {nombre: "Silla", precio: 1000},
    {nombre: "Puerta", precio: 3000},
    {nombre: "Vidrio negro", precio: 200},
    {nombre: "Vidrio blanco", precio: 300}
]

//forEach() (recorre el array y ejecuta lo indicado)
numeros.forEach((numero)=> {
    console.log(numero);
});
productos.forEach((producto) =>{
    console.log(producto.nombre)
})

//Find() (recorre el Array y retorna el primer elemento que cumpla condicion)
let productoElegido = prompt("Ingresa el producto");
console.log( productos.find((producto) => producto.nombre === productoElegido));

//Filter() (recorre el Array y retorna uno nuevo con todos los elementos que cumplan una condicion)
let productoSeleccionado = prompt("Ingrese el producto");
console.log( productos.filter((producto) => producto.nombre.includes("Vidrio")))

//Some() (recorre el Array y responde true o false si encuentra o no un elemento que cumpla una condicion)
let cisne = animales.some((animal) => animal === "cisne");
console.log(cisne)

//Map() (recorre el Array y retorna uno nuevo con los elementos tranformados del Array original)
let nombres = productos.map((producto) => producto.nombre);
console.log(nombres)
let precioActualizados = productos.map((producto) => {
    return {
        nombre: producto.nombre,
        precio: producto.precio * 2
    }
})
console.log(precioActualizados)

//Reduce() (recorre el Array y retorna un unico valor tras operar sobre elementos)
const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(total);
const totalCarrito = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log(totalCarrito)

//Sort() (reordena el Array segun el criterio indicado)
numeros.sort((a, b) => a - b);
console.log(numeros)

/**********************MATH*********************/

const numeroDecimal1 = 1.25;
const numeroDecimal2 = 1.75;

console.log(Math.min(15, 20, 66, 9)); //Retorna el num mas bajo

console.log(Math.max(15, 20, 66, 9)); //Retorna el num mas alto

console.log(Math.ceil(numeroDecimal1)); //Retorna el num redondeando hacia arriba

console.log(Math.floor(numeroDecimal1)); //Retorna el num reodneando hacia abajo

console.log(Math.round(numeroDecimal1)); //Retorna el num redondeando hacia el mas cercano

console.log(Math.random()); //Retorna un num entre 0 y 1 inclusive el 1

console.log(Math.round(Math.random()));

console.log(Math.round(Math.random() * 50));

console.log(Math.round(Math.random() * 50 + 20));



























