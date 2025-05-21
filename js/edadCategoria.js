// Solicita al usuario su edad y la convierte a número entero
let edad = parseInt(prompt("Ingrese su edad:"));

// Clasifica según el rango de edad
if (edad < 0) {
    console.log("Edad no válida");
} else if (edad <= 12) {
    console.log("Niño");
} else if (edad <= 17) {
    console.log("Adolescente");
} else if (edad <= 59) {
    console.log("Adulto");
} else {
    console.log("Adulto mayor");
}
