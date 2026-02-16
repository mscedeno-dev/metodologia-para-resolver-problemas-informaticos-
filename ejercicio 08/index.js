"use strcit"
let totalKm = Number(prompt("ingresar km recorridos"));
let precioPorKm = 0.25;
let arranque = 0.50;

let total = arranque + (totalKm*precioPorKm);

if (total <=1.50){
    alert ("valor a pagar es: 1.50");
}

else {
    alert ("valor a pagar es: " + total);
}