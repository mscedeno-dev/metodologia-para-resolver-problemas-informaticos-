"use strict";
//1
function mostrarSaludo() {
    let saludo= prompt("Estas ahi ?");
     if(saludo=="si")
        alert("Bienvenido");
    }
    mostrarSaludo();
//2
function getFecha(){
    let fecha= prompt('ingresa la fecha');
    return fecha
}

// 3
function mostrarSaludo(){
    let nombre= prompt('Como te llamas ');
    alert("Bienvenido " + nombre);
} 
    mostrarSaludo();
// 4
function sumarNumeros(a,b){
    let numeroA= Number(prompt('Ingrese el numeroA'));
    let numeroB= Number(prompt('Ingrese el numeroB'));
    let resultado= numeroA+numeroB;
    alert(resultado);
    return resultado;
}