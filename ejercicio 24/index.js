"use strict"
//declarion funciones
function pareimpar (a){
    return a%2 == 0
}
alert (pareimpar (5))

//funciones de expresion

let pareimpar2 = function (a) {
    return a%2==0;
}
alert (pareimpar2 (6))


//funciones flecha

let pareimpar3 = (a) => a%2==0;

alert (pareimpar3(7))