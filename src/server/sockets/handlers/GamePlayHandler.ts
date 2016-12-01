
import ISocketHandler = require("../interfaces/SocketHandler");

class GamePlayHandler implements ISocketHandler {
    socket: SocketIO.Socket;

    onRegister(io: SocketIO.Server, socket: SocketIO.Socket) {
        this.socket = socket;

        socket.join("gamePlay")
            .on("playVote", (data, cb) => this.playVote(data, cb));
    }

    playVote(data: any, callback: (data: any) => void) {
        this.socket.in(`gamePlay#${data.game}`).broadcast.emit("playerChangedReadyState", data);
        callback(data);
    }
}

export = GamePlayHandler;