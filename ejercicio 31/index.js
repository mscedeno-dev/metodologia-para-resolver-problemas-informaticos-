"use strict";
const container = document.getElementById("container");

const nuevoParrafo = document.createElement("h1");
nuevoParrafo.textContent = "estudiantes";

const students = ["María", "Pedro", "Luis", "Ana", "Lucía"];

const nuevalista = document.createElement("ul");

students.forEach((student) =>
  {
    const item = document.createElement("li");
    item.textContent = student;
    nuevalista.appendChild(item);
   }  
);

container.appendChild(nuevoParrafo);
container.appendChild(nuevalista);