/***********************************************************/
/***********************************************************/
//Objetos
const productoA = {
    nombre: "sillon",
    color: "gris",
    peso: 30
}
const productoB = {
    nombre: "sillon",
    color: "rojo",
    peso: 40
}

productoA.color = "negro"

console.log(productoA.color)
/***********************************************************/
/***********************************************************/
//Constructor
function Producto(nombre, color, peso) {
    this.nombre = nombre;
    this.color = color;
    this.peso = peso;
}

const producto1 = new Producto("sillon", "rojo", 40);
const producto2 = new Producto("cama", "blanca", 50);

console.log(producto2)
/***********************************************************/
/***********************************************************/
//Clases
/*class Producto1 {
    constructor(nombre, color, peso) {
        this.nombre = nombre;
        this.color = color;
        this.peso = peso;
    }
}
const producto3 = new Producto("sillon", "rojo", 40);

const producto4 = {
    nombre: "cama",
    color: "blanca",
    peso: 50
}
console.log(producto3);
console.log(producto4)*/
/***********************************************************/
/***********************************************************/
//Metodos
class Persona {
    constructor(nombre, edad, nacionalidad){
        this.nombre = nombre;
        this.edad = edad;
        this.nacionalidad = nacionalidad;

        this.saludar = function(){ console.log("Hola, que tal? " + this.nombre)};
        this.cumpleanios = function(){this.edad = this.edad + 3}
    }
}
const persona1 = new Persona("Kevin", 19, "argentina");
const persona2 = new Persona("Carpi", 27, "argentina");

 console.log(persona2.edad);
 persona2.cumpleanios();
 console.log(persona2.edad);

 persona1.saludar();

////////////////////////////////////////////////////////////////////

//Op. IN
if("hobby" in persona1) {
    console.log(persona1.hobby);
} else {
    console.log("No hay hobby")
}

//Op. For...IN
for (const usuario in persona1) {
    console.log(usuario)
}
/***********************************************************/
/***********************************************************/