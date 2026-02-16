"use strict"
//crear una funcion que muestre en un alert todos los elementos de array enviado commo argummento

function mostrarElementos(numeros) {
    let i = 0;

    while (i < numeros.length) {
        alert(numeros [i]);
        i++;
    }
}

let numeros = [5,9,0,1,8];
mostrarElementos(numeros);
