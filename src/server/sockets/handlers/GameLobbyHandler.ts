
import ISocketHandler = require("../interfaces/SocketHandler");


class GameLobbyHandler implements ISocketHandler {
    io: SocketIO.Server;
    socket: SocketIO.Client;

    onRegister(io: SocketIO.Server, socket: SocketIO.Socket) {
        socket.join("gameLobby");

        socket.in("gameLobby").on("playerReadyStateChange", (data) => this.changePlayerReadyState(data));
    }

    changePlayerReadyState(data: any) {
        let player: string = data.player;
    }
}


export = GameLobbyHandler;