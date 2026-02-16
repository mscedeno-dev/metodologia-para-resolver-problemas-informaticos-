"use strict"

const wallet = {
    material: "cuero",
    color: "cafe",
    precio: 1.2,
    esNueva: true,
};
alert("el color de la billetera es: " + wallet.color);




const vehiculo = [
{marca: "Toyota", cilindraje: 1.3000, puerta: 2, estaMatriculado:true, propietario: "Juan Perez"},
{marca: "Mazda", cilindraje: 2.0000, puerta: 4, estaMatriculado:false, propietario: "Ana Gomez"},
{marca: "Kia", cilindraje: 1.6000, puerta: 4, estaMatriculado:true, propietario: "Luis Rodriguez"},
];
vehiculo.forEach(vehiculo => 
alert("Los nombres de los propietarios son: " + vehiculo.propietario)
);

//const vehiculopeque = vehiculo.filter(vehiculo => vehiculo.cilindraje < 1.8000)

vehiculo.forEach(vehiculo => vehiculo.cilindraje < 1.8000  (alert("Los vehiculos con cilindraje menor a 1.8000 son: " + vehiculo.marca)
));