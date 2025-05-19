// dias_laborales.js

let dia = "LUNES";  // Puedes cambiar este valor para probar otros días

function esDiaLaboral(dia) {
    dia = dia.toLowerCase();

    const diasLaborales = ['lunes', 'martes', 'miércoles', 'miercoles', 'jueves', 'viernes'];

    if (diasLaborales.includes(dia)) {
        return "Es un día laboral.";
    } else if (dia === 'sábado' || dia === 'sabado' || dia === 'domingo') {
        return "No es un día laboral.";
    } else {
        return "Día inválido.";
    }
}

// Ejecutamos la función con la variable dia y mostramos el resultado
console.log(`Día: ${dia} - Resultado: ${esDiaLaboral(dia)}`);
