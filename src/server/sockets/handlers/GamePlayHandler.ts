
import { ISocketHandler } from "../interfaces/ISocketHandler";

export class GamePlayHandler implements ISocketHandler {
    socket: SocketIO.Socket;

    onRegister(io: SocketIO.Server, socket: SocketIO.Socket) {
        this.socket = socket;

        socket.join("gamePlay")
            .on("joinGame", (data, cb) => this.joinGame(data, cb))
            .on("leaveGame", (data, cb) => this.leaveGame(data, cb))
            .on("playVote", (data, cb) => this.playVote(data, cb));
    }

    leaveGame(data: any, callback: (data) => void) {
        this.socket.leave(`gamePlay#${data.game}`);
    }

    joinGame(data: any, callback: (data) => void) {
        this.socket.join(`gamePlay#${data.game}`);
    }

    playVote(data: any, callback: (data: any) => void) {
        this.socket.in(`gamePlay#${data.game}`).broadcast.emit("playerChangedReadyState", data);
        callback(data);
    }
}