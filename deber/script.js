// Array de objetos con información de sistemas operativos
const sistemasOperativos = [
    {
        tipo: "Windows",
        nombre: "Microsoft Windows 11",
        funcion: "Sistema operativo de uso general para PC",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Windows_11_logo.svg/512px-Windows_11_logo.svg.png",
        topVersiones: "Windows 11 Pro / Windows 10 Enterprise",
        fallosComunes: "Actualizaciones forzadas, pantallas azules (BSOD)",
        clase: "windows"
    },
    {
        tipo: "macOS",
        nombre: "Apple macOS Sonoma",
        funcion: "Sistema operativo exclusivo para dispositivos Apple",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/MacOS_logo_%282017%29.svg/512px-MacOS_logo_%282017%29.svg.png",
        topVersiones: "macOS Sonoma / macOS Ventura",
        fallosComunes: "Compatibilidad limitada, alto costo de hardware",
        clase: "macos"
    },
    {
        tipo: "Linux",
        nombre: "Ubuntu Linux",
        funcion: "Sistema operativo de código abierto y gratuito",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Logo-ubuntu_cof-orange-hex.svg/512px-Logo-ubuntu_cof-orange-hex.svg.png",
        topVersiones: "Ubuntu 24.04 LTS / Fedora 39 / Arch Linux",
        fallosComunes: "Curva de aprendizaje, drivers propietarios",
        clase: "linux"
    }
];

// Función para crear las tarjetas de sistemas operativos
function crearTarjetasSistemas() {
    const container = document.getElementById('sistemasContainer');
    
    sistemasOperativos.forEach(item => {
        // Crear elementos del DOM
        const card = document.createElement('div');
        card.className = 'card';
        
        const cardImage = document.createElement('div');
        cardImage.className = 'card-image';
        
        const img = document.createElement('img');
        img.src = item.imagen;
        img.alt = item.nombre;
        img.onerror = function() {
            this.parentElement.innerHTML = `<div style="font-size: 4em; color: #bdc3c7;">${item.tipo}</div>`;
        };
        
        const titulo = document.createElement('h2');
        titulo.className = `card-title ${item.clase}`;
        titulo.textContent = item.tipo;
        
        const funcion = document.createElement('p');
        funcion.className = 'card-function';
        funcion.innerHTML = `<strong>Función:</strong> ${item.funcion}`;
        
        const botonComprar = document.createElement('button');
        botonComprar.className = 'comprar-btn';
        botonComprar.textContent = 'Descargar';
        botonComprar.addEventListener('click', () => {
            alert(`¡Iniciando descarga de ${item.nombre}!`);
        });
        
        const detalles = document.createElement('div');
        detalles.className = 'card-details';
        
        const topVersiones = document.createElement('p');
        topVersiones.innerHTML = `<strong>Top Versiones:</strong> ${item.topVersiones}`;
        
        const fallosComunes = document.createElement('p');
        fallosComunes.innerHTML = `<strong>Fallos Comunes:</strong> ${item.fallosComunes}`;
        
        // Ensamblar la tarjeta
        cardImage.appendChild(img);
        card.appendChild(cardImage);
        card.appendChild(titulo);
        card.appendChild(funcion);
        card.appendChild(botonComprar);
        detalles.appendChild(topVersiones);
        detalles.appendChild(fallosComunes);
        card.appendChild(detalles);
        
        // Agregar la tarjeta al contenedor
        container.appendChild(card);
    });
}

// Ejecutar la función cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', crearTarjetasSistemas);
