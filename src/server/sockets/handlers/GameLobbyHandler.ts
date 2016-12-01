
import ISocketHandler = require("../interfaces/SocketHandler");


class GameLobbyHandler implements ISocketHandler {
    socket: SocketIO.Socket;

    onRegister(io: SocketIO.Server, socket: SocketIO.Socket) {
        this.socket = socket;

        socket.join("gameLobby")
            .on("playerReadyStateChange", (data, cb) => this.changePlayerReadyState(data, cb))
            .on("leaveLobby", (data) => this.leaveLobby(data));
    }

    changePlayerReadyState(data: any, callback: (data: any) => void) {
        this.socket.in(`gameLobby#${data.game}`).broadcast.emit("playerChangedReadyState", data);
        callback(data);
    }

    leaveLobby(data: any) {
        this.socket.leave(`gameLobby#${data.game}`);

        if (data.play) {
            this.socket.join(`gamePlay#${data.game}`);
        }
    }
}


export = GameLobbyHandler;