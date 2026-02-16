// 1) Datos (array de objetos)
const lista = [
  {
    id: 1,
    fullname: "Juan Pérez",
    url: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: 2,
    fullname: "María López",
    url: "https://i.pravatar.cc/150?img=32"
  },
  {
    id: 3,
    fullname: "Carlos Andrade",
    url: "https://i.pravatar.cc/150?img=56"
  }
];

const container = document.getElementById("listContainer");

lista.forEach((persona) => {
  const item = document.createElement("div");
  item.className = "item";

  const img = document.createElement("img");
  img.src = persona.url;

  const info = document.createElement("div");
  const pName = document.createElement("p");
  pName.className = "fullname";
  pName.textContent = persona.fullname;

  const pId = document.createElement("p");
  pId.className = "id";
  pId.textContent = `ID: ${persona.id}`;

  info.appendChild(pName);
  info.appendChild(pId);
  item.appendChild(img);
  item.appendChild(info);
  container.appendChild(item);
});
