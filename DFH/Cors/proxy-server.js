const http = require('http');
const https = require('https');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // Desactivar la verificación de certificados SSL

// Crear un agente HTTPS que ignore los errores de certificado
const agent = new https.Agent({
    rejectUnauthorized: false
});

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    const options = {
        hostname: 'api.devcicm.com',
        port: 8062,
        path: req.url,
        method: req.method,
        headers: req.headers,
        agent: agent
    };

    const proxy = https.request(options, (proxyRes) => {
        res.writeHead(proxyRes.statusCode, proxyRes.headers);
        proxyRes.pipe(res, { end: true });
    });

    req.pipe(proxy, { end: true });

    proxy.on('error', (e) => {
        console.error(`Problema con la solicitud proxy: ${e.message}`);
        res.writeHead(500);
        res.end(`Problema con la solicitud proxy: ${e.message}`);
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Proxy corriendo en el puerto ${PORT}`);
});
