"use strict"

let respuesta; 
let cucharadas = 1;

do{

    respuesta = prompt("Desea una chucharadita mas de azucar?  ( si / no ) ");
    if (respuesta == "si"){
        cucharadas++;
        alert ("agregando una cucharada mas tu total seria: " + cucharadas)
    }

}while (respuesta == "si")
    alert( "total de cucharaditas es " + cucharadas + " de azucar")