const http = require('http');
const fs = require('fs');
const file_name = '0_palabras_todas.txt'

function generar_contrasenna(data){
    const palabras = data.split(/\s+/);
    const contrasenna = [];

    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * palabras.length);
        contrasenna.push(palabras[randomIndex]);
    }

    return contrasenna.join(' ');
}

const server = http.createServer((req, res) => {
    console.log('New connection');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    fs.promises
        .readFile(file_name, 'utf-8')
        .then(data => {
            let password = generar_contrasenna(data)
            res.end(`<h1>Password: ${password}</h1>`)
        })
        .catch(err => {
            console.error('Error leyendo el archivo:', err);
            res.statusCode = 500;
            res.end('<h1>Error interno del servidor</h1>');
        })
});


server.listen(3000, () => {
    console.log(`Servidor escuchando en el puerto 3000`)
});


