
import ISocketHandler = require("../interfaces/SocketHandler");


class GameLobbyHandler implements ISocketHandler {
    io: SocketIO.Server;
    socket: SocketIO.Socket;

    onRegister(io: SocketIO.Server, socket: SocketIO.Socket) {
        this.socket = socket;

        socket.join("gameLobby")
            .on("playerReadyStateChange", (data, cb) => this.changePlayerReadyState(data, cb))
            .on("leaveGame", (data) => this.leaveGame(data));
    }

    changePlayerReadyState(data: any, callback: (data: any) => void) {
        this.socket.in(`gameLobby#${data.game}`).broadcast.emit("playerChangedReadyState", data);
        callback(data);
    }

    leaveGame(data: any) {
        this.socket.leave(`gameLobby#${data.game}`);
    }
}


export = GameLobbyHandler;