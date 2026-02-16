"use strict"

// 1. Suma de elementos impares
function sumaImpares(nums) {
    let suma = 0;
    let i = 0;
    while (i < nums.length) {
        if (nums[i] % 2 !== 0) {
            suma += nums[i];
        }
        i++;
    }
    return suma;
}

// 2. Suma de elementos en índices pares
function sumaIndicesPares(nums) {
    let suma = 0;
    let i = 0;
    while (i < nums.length) {
        if (i % 2 === 0) {
            suma += nums[i];
        }
        i++;
    }
    return suma;
}

// 3. Suma de elementos mayores a 10
function sumaMayores10(nums) {
    let suma = 0;
    let i = 0;
    while (i < nums.length) {
        if (nums[i] > 10) {
            suma += nums[i];
        }
        i++;
    }
    return suma;
}

// 4. Suma de índices donde el elemento es 0
function sumaIndicesConCero(nums) {
    let suma = 0;
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === 0) {
            suma += i;
        }
        i++;
    }
    return suma;
}

// 5. Suma de elementos múltiplos de 3
function sumaMultiplosDe3(nums) {
    let suma = 0;
    let i = 0;
    while (i < nums.length) {
        if (nums[i] % 3 === 0) {
            suma += nums[i];
        }
        i++;
    }
    return suma;
}

// 6. Suma de elementos que no son múltiplos de 7
function sumaNoMultiplos7(nums) {
    let suma = 0;
    let i = 0;
    while (i < nums.length) {
        if (nums[i] % 7 !== 0) {
            suma += nums[i];
        }
        i++;
    }
    return suma;
}

// 7. Suma de elementos donde el índice es igual al elemento
function sumaElementoIgualIndice(nums) {
    let suma = 0;
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === i) {
            suma += nums[i];
        }
        i++;
    }
    return suma;
}

// 8. Suma de elementos donde el índice es mayor al elemento
function sumaIndiceMayorElemento(nums) {
    let suma = 0;
    let i = 0;
    while (i < nums.length) {
        if (i > nums[i]) {
            suma += nums[i];
        }
        i++;
    }
    return suma;
}

// 9. Suma de índices donde el índice es menor al elemento
function sumaIndicesMenorElemento(nums) {
    let suma = 0;
    let i = 0;
    while (i < nums.length) {
        if (i < nums[i]) {
            suma += i;
        }
        i++;
    }
    return suma;
}
