const http = require('http');

// Crear un servidor HTTP
const server = http.createServer((req, res) => {
    // Configurar los encabezados CORS
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir cualquier origen
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Métodos permitidos
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Encabezados permitidos

    // Manejar solicitudes OPTIONS (preflight)
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // Manejar solicitudes POST para la ruta "/servicio/SoftHispan/apirest/insert"
    if (req.method === 'POST' && req.url === '/servicio/SoftHispan/apirest/insert') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString(); // Convertir el Buffer a string
        });

        req.on('end', () => {
            console.log('Datos recibidos:', body);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Datos insertados con éxito' }));
        });
    }

    // Manejar solicitudes GET para la ruta "/servicio/SoftHispan/apirest/search"
    else if (req.method === 'GET' && req.url === '/servicio/SoftHispan/apirest/search') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Datos consultados con éxito' }));
    }

    // Manejar otras rutas
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no encontrada');
    }
});

// Definir el puerto y comenzar a escuchar
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
