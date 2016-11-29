
import ISocketHandler = require("../interfaces/SocketHandler");


class LobbyHandler implements ISocketHandler {
    io: SocketIO.Server;
    socket: SocketIO.Client;

    onRegister(io: SocketIO.Server, socket: SocketIO.Socket) {
        socket.join("lobby");
    }
}


export = LobbyHandler;