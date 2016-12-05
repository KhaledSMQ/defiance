
import { ISocketHandler } from "../interfaces/ISocketHandler";
import { PlayerInfoService } from "../../services/PlayerInfoService";
import { SocketEventNames } from "shared/constants"

export class GameLobbyHandler implements ISocketHandler {
    socket: SocketIO.Socket;
    playerInfoService: PlayerInfoService;

    onRegister(io: SocketIO.Server, socket: SocketIO.Socket) {
        this.playerInfoService = new PlayerInfoService();
        this.socket = socket;

        socket.join("gameLobby")
            .on(SocketEventNames.Client.joinLobby, (data, cb) => this.joinLobby(data, cb))
            .on(SocketEventNames.Client.playerReadyStateChange, (data, cb) => this.changePlayerReadyState(data, cb))
            .on(SocketEventNames.Client.leaveLobby, (data) => this.leaveLobby(data));
    }

    changePlayerReadyState(data: any, callback: (data: any) => void) {
        this.socket.in(`gameLobby#${data.game}`).broadcast.emit(SocketEventNames.Server.playerChangedReadyState, data);
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