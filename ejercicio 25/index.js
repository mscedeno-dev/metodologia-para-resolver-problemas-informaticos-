"use strict"
//sumar en 1 a los elementos la posicion 0 no se considera
let phone = "0877852635"
function desencriptar(numero){
    let array = numero.split("");
    let sinprimeraposicion = array.slice (1);
    let sumar = sinprimeraposicion.map(n => Number(n)+1);
    let resultado = [array[0]].concat(sumar);
    let texto = resultado.join("");

    return texto
}

alert(desencriptar(phone))