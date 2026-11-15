// API de estado - Distribuciones Mediterráneo S.L.
const http = require('http');
const os = require('os');

const PUERTO = 3000;

const servidor = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bienvenido a la API de Distribuciones Mediterráneo - by Ismail Bensalah\n');
  } else if (req.url === '/estado') {
    const estado = {
      servicio: 'api_node - Distribuciones Mediterráneo',
      hostname: os.hostname(),
      uptime_segundos: Math.round(process.uptime()),
      fecha: new Date().toISOString()
    };
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(estado, null, 2));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Ruta no encontrada\n');
  }
});

servidor.listen(PUERTO, () => {
  console.log(`API escuchando en el puerto ${PUERTO}`);
});