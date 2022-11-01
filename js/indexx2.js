let edad = prompt("Ingrese su edad");

if (edad >= 18) {
    alert("Sos mayor de edad.");
    
} else {
    alert("Sos menor de edad.")
}

let hora = prompt("Ingrese la hora");

if (hora >= 6 && hora < 12) {
    alert ("Buenos días!");
} else if (hora >=12 && hora < 20) {
    alert("Buenas tardes!")
} else {
    alert ("Buenas noches!")
}

/*for (let x = 0; x < 10; x++) {
    console.log("Ciclo numerico" + x);
}*/

let Semana = prompt("Ingrese el dia de la semana");

switch (Semana) {
    case "Lunes":
        alert("Abierto");
        break;
    case "Martes":
        alert("Abierto");
        break;
    case "Miercoles":
        alert("Abierto");
        break;
    case "jueves":
        alert("Abierto");
        break;
    case "Viernes":
        alert("Abierto");
        break;
    case "Sabado":
        alert("Cerrado");
        break;
    case "Domingo":
        alert("Cerrado");
        break;
}