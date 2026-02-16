"use strict"

//crear una funcion que retone cuantos numeros uno (1) encuentra en el siguiente array

function contarUnos(array) {
    let i = 0;        
    let contador = 0; 

    while (i < array.length) {
        if (array[i] === 1) { 
            contador++;   
        }
        i++;            
    }

    return contador;  
}

// Ejemplo de uso:
let numeros = [1, 3, 1, 5, 7, 1, 9];
alert("Cantidad de números 1 encontrados: " + contarUnos(numeros));
