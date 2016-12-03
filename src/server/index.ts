
import { ExpressServer } from "./server";
import * as http from "http";
import * as socketIO from "socket.io";
import { SocketServer } from "./sockets/SocketServer";
import { DataAccess } from "./app/dataAccess/DataAccess";

var app = new ExpressServer().app;
var server = http.createServer(app);

var io = socketIO(server, { serveClient: false });
SocketServer.start(io);

DataAccess.connect();

server.listen(app.get('port'), function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express angular app is listening on port:' + port);
});