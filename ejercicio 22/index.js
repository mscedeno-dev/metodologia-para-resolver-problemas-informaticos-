"use strict"

//crear una funcion que reciba como parametro el numero de elementos del array permita ingresar al usuario uno a uno los elemento.
//la funcion debe devolver el array resultante

function inputItems (size) {
    let nums = [];
    let i = 0;
    while(i < size){
        let num = Number (prompt("ingresar elemento: "));
        nums.push(num);
        i++

    }
    return nums;

}

let totalItems = (Number (prompt("ingresar cantidad de elementos")));
let result = inputItems(totalItems);
alert (result);
