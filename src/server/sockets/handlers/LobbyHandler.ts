
import ISocketHandler = require("../interfaces/SocketHandler");


class LobbyHandler implements ISocketHandler {
    io: any;
    socket: any;

    onRegister(io: SocketIO.Server, socket: SocketIO.Socket) {
        socket.join("lobby");
    }
}


export = LobbyHandler;