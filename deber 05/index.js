"use strict"

function multiplicarYSumar(array) {
    let suma = 0;        // Para acumular la suma total
    let i = 0;           // Índice inicial

    while (i < array.length) {   // Mientras no lleguemos al final del array
        suma += array[i] * i;   // Multiplicamos el elemento por su índice y sumamos
        i++;                     // Avanzamos al siguiente índice
    }

    return suma;  // Devolvemos la suma total
}

// Ejemplo de uso
let numeros = [2, 4, 6, 8];
let resultado = multiplicarYSumar(numeros);
alert (resultado); // Imprime 40
