const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Imagen del burro
const burroImg = new Image();
burroImg.src = 'https://media.istockphoto.com/id/1209092315/es/vector/peque%C3%B1o-burro-de-dibujos-animados-ilustraci%C3%B3n-vectorial-aislada.jpg?s=612x612&w=0&k=20&c=h64ksweqbY6kq-32n9hr8r6MHC06L5JT4EfL5WbXioo='; // Asegúrate de tener la imagen en el mismo directorio o especificar la ruta correcta

// Imagen de la cola
const colaImg = new Image();
colaImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdo5dELlo_9M3Dn52zxkWARzqa5LVi39LytMRhi1Zv8jutuhxeUQm0rY6vpWiY6KMVyk&usqp=CAU'; // Imagen de la cola

// Posición inicial de la cola
let colaX = 100;
let colaY = 100;

// Posición correcta de la cola
const colaCorrectaX = 450;
const colaCorrectaY = 300;

// Estado del arrastre de la cola
let isDragging = false;

// Cargar las imágenes
burroImg.onload = () => {
    drawGame();
};
colaImg.onload = () => {
    drawGame();
};

// Dibuja el burro y la cola
function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(burroImg, 200, 100, 400, 400);
    ctx.drawImage(colaImg, colaX, colaY, 50, 50);
}

// Verificamos si se está haciendo click sobre la cola
canvas.addEventListener('mousedown', function(e) {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;

    
    if (mouseX >= colaX && mouseX <= colaX + 50 && mouseY >= colaY && mouseY <= colaY + 50) {
        isDragging = true;
    }
});

// Actualizar la posición de la cola mientras se arrastra
canvas.addEventListener('mousemove', function(e) {
    if (isDragging) {
        
        colaX = e.offsetX - 25;
        colaY = e.offsetY - 25;
        drawGame();
    }
});

// Verificar si la cola está cerca de la posición correcta
canvas.addEventListener('mouseup', function() {
    isDragging = false;

    
    const distance = Math.sqrt(Math.pow(colaX - colaCorrectaX, 2) + Math.pow(colaY - colaCorrectaY, 2));

    if (distance < 50) {
        document.getElementById('message').textContent = '¡Correcto! Has puesto la cola en el lugar correcto.';
    } else {
        document.getElementById('message').textContent = 'Sigue intentando...';
    }
});

let animationCanvas = document.getElementById("animationCanvas");
let animationCtx = animationCanvas.getContext("2d");

let x = 0, y = 0;
const width = 20, height = 20;
const speed = 100;
let direction = 1;
let lastTimestamp = 0; // Alamacenamos el tiempo del último frame

window.addEventListener("load", (event) => {
    init();
});

function init(){
    window.requestAnimationFrame(animationDraw);
}

function animationDraw(timestamp){
    if (!lastTimestamp) lastTimestamp = timestamp;

    const deltaTime = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    // Calculamos cuánto mover el objeto en función del tiempo transcurrido
    const distance = (deltaTime / 1000) * speed;

    // Cambiamos la dirección
    if (x < 0) {
        direction = 1; 
    }
    if (x > animationCanvas.width - width) {
        direction = -1;
    }

    x += direction * distance;

    animationCtx.clearRect(0, 0, animationCanvas.width, animationCanvas.height);
    animationCtx.fillRect(x, y, width, height);

    window.requestAnimationFrame(animationDraw);
}

