"use strcit"
let tarifaEstacionamiento = 1;
let precio = Number(prompt("ingresar precio"));
let cantidad = Number(prompt("ingresar cantidad"));

let total = precio*cantidad 
if (total <=20){
    alert ("valor a pagar es 1$ de estacionamiento, mas el connsumo es:" + total);
}

else {
    alert ("valor a pagar es: " + total + ", no se paga estacionamiento");
}