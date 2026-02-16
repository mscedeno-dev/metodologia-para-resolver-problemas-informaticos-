"use strict"



function findSpaceWhithFor(frase) {
    let indexFound= -1;
    for (let i=0; i < frase.length; i++) {
        if (frase[i] === " ") {    
            indexFound = i;             
    }; 
}
return indexFound;
}

let frase = "Hola Mundo";
findSpaceWhithFor(frase);
let primeraPalabra = frase.substring(0,findSpaceWhithFor(frase));
let segundaPalabra = frase.substring(findSpaceWhithFor(frase),);
alert (primeraPalabra)  
alert (segundaPalabra)