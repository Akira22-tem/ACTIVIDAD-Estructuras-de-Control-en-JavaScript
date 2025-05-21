// Solicita al usuario un número para mostrar su tabla de multiplicar
let numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar:"));

// Recorre del 1 al 12 mostrando cada resultado
for (let i = 1; i <= 12; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
