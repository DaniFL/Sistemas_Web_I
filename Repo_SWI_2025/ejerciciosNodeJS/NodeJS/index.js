const http = require('http');
const os = require('os');
const dotenv = require('dotenv');

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const port = process.env.PUERTO ? parseInt(process.env.PUERTO): 3000;

const server = http.createServer((req, res) => {
    console.log('New connection');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
});

function cpuInfo() {
    let totalIdle = 0, totalTick = 0;
  
    os.cpus().forEach((cpu) => {
        // Sumar los tiempos de cada núcleo
        const { user, nice, sys, idle, irq } = cpu.times;
        totalIdle += idle;
        totalTick += user + nice + sys + idle + irq;
    });
  
    // Calcular el uso de CPU
    const idlePercentage = (totalIdle / totalTick) * 100;
    const cpuUsagePercentage = 100 - idlePercentage; // El uso de CPU es lo contrario del tiempo inactivo
  
    return cpuUsagePercentage.toFixed(2); // Devolvemos el uso de CPU en porcentaje
}

function memInfo() {
    const usedMemory = os.totalmem() - os.freemem(); // Memoria utilizada
    const memoryUsagePercentage = (usedMemory / os.totalmem()) * 100; // Porcentaje de uso de memoria

    return memoryUsagePercentage.toFixed(2); // Devolvemos el uso de memoria en porcentaje
}

const intervalo = process.env.SEGUNDOS ? parseInt(process.env.SEGUNDOS) * 1000 : 4000;

function infoPeriodica(){
    console.clear();
    console.log(`Intervalo de actualización: ${intervalo/1000} segundos`);
    console.log(`Uso de la CPU: ${cpuInfo()}%`);
    console.log(`Uso de la Memoria: ${memInfo()}%`);
    console.log(`Tiempo que el sistema lleva activo: ${os.uptime().toFixed(2)} segundos`);
    console.log(`Tiempo que lleva ejecutándose node.js: ${process.uptime().toFixed(2)} segundos`);
}



setInterval(infoPeriodica, intervalo);

server.listen(port, () => {
    console.log(`Server running at port ${port}\n`);
    console.log(`Versión de NodeJS: ${process.version}\n`);
    console.log(`Sistema operativo: ${os.platform()}, versión ${os.release()}\n`);
    console.log(`Arquitectura del sistema: ${os.arch()}\n`);
    console.log(`Memoria libre: ${os.freemem()}/${os.totalmem()}\n`);
    console.log(`Número de núcleos de CPU: ${os.cpus().length}\n`);
});
