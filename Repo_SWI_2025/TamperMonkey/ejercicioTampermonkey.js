// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-10-22
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Función para crear una mascota
    function crearMascota(x = 0, y = 0) {

        const mascota = document.createElement('div');
        mascota.classList.add('mascota');
        mascota.textContent = '🐱';
        mascota.style.left = x + 'px';
        mascota.style.top = y + 'px';
        document.body.appendChild(mascota);

        // Mover la mascota a una posición aleatoria
        function moverMascota() {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            // Generar posiciones aleatorias, restar el tamaño de la mascota
            const nuevaX = Math.random() * (windowWidth - 50);
            const nuevaY = Math.random() * (windowHeight - 50);

            // Mover la mascota
            mascota.style.left = nuevaX + 'px';
            mascota.style.top = nuevaY + 'px';
        }

        // Mover la mascota cada 1 segundo
        setInterval(moverMascota, 1000);

        // Duplicar la mascota al hacer clic en ella
        mascota.addEventListener('click', function() {
            const currentX = parseInt(mascota.style.left, 10);
            const currentY = parseInt(mascota.style.top, 10);

            crearMascota(currentX, currentY);
        });
    }

    const css = `
        .mascota {
            position: fixed;
            top: 0;
            left: 0;
            font-size: 50px;
            z-index: 10000;
            transition: top 0.5s, left 0.5s;
            cursor: pointer;
        }
    `;
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    crearMascota();
})();