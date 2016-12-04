
import { ISocketHandler } from "../interfaces/ISocketHandler";
import { PlayerInfoService } from "../../services/PlayerInfoService";

export class GameLobbyHandler implements ISocketHandler {
    socket: SocketIO.Socket;
    playerInfoService: PlayerInfoService;

    onRegister(io: SocketIO.Server, socket: SocketIO.Socket) {
        this.playerInfoService = new PlayerInfoService();
        this.socket = socket;

        socket.join("gameLobby")
            .on("joinLobby", (data, cb) => this.joinLobby(data, cb))
            .on("playerReadyStateChange", (data, cb) => this.changePlayerReadyState(data, cb))
            .on("leaveLobby", (data) => this.leaveLobby(data));
    }

    changePlayerReadyState(data: any, callback: (data: any) => void) {
        this.socket.in(`gameLobby#${data.game}`).broadcast.emit("playerChangedReadyState", data);
        let playerInfo = this.playerInfoService.getPlayerInfo(data.player);
        playerInfo.ready = data.ready;
        callback(data);
    }

    leaveLobby(data: any) {
        this.socket.leave(`gameLobby#${data.game}`);
    }

    joinLobby(data: any, callback: (data: any) => void): void {
        this.socket.join(`gameLobby#${data.game}`);

        callback(this.playerInfoService.playerInfoCache);
    }
}