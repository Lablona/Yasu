//Arrays
const muebles = ["Sillon", "Silla", "Ropero", "Puerta", "Cama"];
const jardin = ["Ventana", "Jarro", "Manguera"];

//LENGTH
console.log(muebles.length)
for (let i = 0; i < muebles.length; i++) {
    console.log(muebles[i]);
}

//PUSH (agrega un elemento al final del Array)
muebles.push("Cajon");
console.log(muebles)

//UNSHIFT (agrega un elemento al comienzo del Array)
muebles.unshift("jarro");
console.log(muebles)

//SHIFT (elimina un elemento al comienzo del Array)
muebles.shift()
console.log(muebles)

//POP (elimina un elemento al final del Array)
muebles.pop()
console.log(muebles)

//SPLICE (elimina elementos de cualquier posicion del Array)
muebles.splice(1, 2)
console.log(muebles)

//CONCAT (une dos Arrays en uno)
const productosFinal = muebles.concat(jardin);
console.log(productosFinal)

//Slice (genera una copia de una parte de nuestro Array)
const patio = muebles.slice(1, 4);
console.log(patio);

//INDEX OFF (saber el numero i de nuestro elemento)
console.log(jardin.indexOf("Jarro"))

//INCLUDES (saber si un elemento existe en el Array)
console.log(jardin.includes("Ventana"))

if (jardin.includes("Mesa")) {
    console.log(jardin.indexOf("Mesa"));
} else {
    console.log("No se encuentra disponible")
}

//REVERSE (invierte el orden de nuestro Array)
jardin.reverse();
console.log(jardin)





