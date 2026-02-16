"use strict"

//solicitamos al usuario el ingreso de un nuero entero y que nos de su tabla de multiplicar

let numeroEntero = Number(prompt("ingreasar un numero entero"));
let multiplo = 0;
let resultado;

while (multiplo <=10){

   resultado= numeroEntero * multiplo ;

   alert (numeroEntero + "*" + multiplo + "=" + resultado);
    multiplo++;

}

//programa que solicite al usuario ingresar un número para intentar adivinar un valor previamente declarado y asignado en una variable.

let objetivo = 5; // número a adivinar
let intento = Number(prompt("Ingresa un número para adivinar del 0 - 10:"));

while (intento !== objetivo) {

    intento = Number(prompt("Intenta de nuevo:"));
}

alert("El número era " + objetivo);

//programa que muestre mediante ventanas emergentes (alert) todos los números impares comprendidos en el rango de 0 a 10

let numero = 0;

while (numero <= 10) {

    if (numero % 2 !== 0) {
        alert("Número impar: " + numero);
    }

    numero++;
}
