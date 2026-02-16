"use strict"
let edades = [25, 20, 23]; //size -> 3 items
edades.push (18); // agrega un elemento a la final de la array
alert (edades); //25, 20, 23, 18
edades.unshift (30);// agrega un elemento al inicio de la array
alert (edades); //30, 25,20,23,18
edades.pop(); //elimina el ultimo elemento de la array
alert (edades); //30, 25, 20, 23
edades.shift (); // elimina el primer elemento de la array
alert (edades); //25,20,23