"use strict"

//ejercicio 1
const a = Number (2025);
let ageOfBorn = Number(prompt ("ingresar año de nacimiento"));
let age = a-ageOfBorn;
alert ("tu edad es: " + age );

//ejercicio 2
let num = Number(prompt("ingresa un numero"));
let par = num % 2==0;
alert ("el numero ingresado es par: " + par);

//ejercicio 3
let km = Number(prompt("ingresar km recorridos"));
const costoPorKm = 0.35;
const tarifaDeArranque = 0.75;

let total = tarifaDeArranque + (costoPorKm * km);
alert ("total a pagar es: " + total);



