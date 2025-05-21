// Pide al usuario que indique si desea ver las tablas de pares o impares
let tipo = prompt("¿Deseas ver las tablas de números 'pares' o 'impares'?").toLowerCase();

// Valida que el usuario haya ingresado una opción válida
if (tipo === "pares" || tipo === "impares") {

    // Recorre del 1 al 10 y selecciona solo pares o impares según lo elegido
    for (let i = 1; i <= 10; i++) {
        if ((tipo === "pares" && i % 2 === 0) || (tipo === "impares" && i % 2 !== 0)) {

            console.log(`Tabla del ${i}:`);

            // Muestra la tabla de multiplicar para ese número
            for (let j = 1; j <= 10; j++) {
                console.log(`${i} x ${j} = ${i * j}`);
            }

            console.log("-------------"); // Separador visual
        }
    }

} else {
    console.log("Entrada no válida. Por favor escribe 'pares' o 'impares'.");
}

