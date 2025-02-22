const http = require('http');

const server = http.createServer((req, res) => {
  // The error is here.  We're missing a call to res.end()
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});