
import ISocketHandler = require("../interfaces/SocketHandler");


class LobbyHandler implements ISocketHandler {
    io: any;
    socket: any;

    onRegister(io: any, socket: any) {
        socket.join("lobby");
    }
}


export = LobbyHandler;