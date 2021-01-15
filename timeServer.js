var net = require('net');

/* var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.pipe(socket);
});

server.listen(1337, '127.0.0.1'); */

const server = net.createServer((socket) => {
    socket.end('goodbye\n');
  }).on('error', (err) => {
    // Handle errors here.
    throw err;
  });
  
  // Grab an arbitrary unused port.
  server.listen(() => {
    console.log('opened server on', server.address());
  });