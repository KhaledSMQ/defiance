
var app = require('./server').app;
var http = require('http');
var socketServer = require('./sockets/SocketServer');

var server = http.createServer(app);

var io = require('socket.io')(server, { serveClient: false });
socketServer.start(io);

server.listen(app.get('port'), function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express angular app is listening on port:' + port);
});
