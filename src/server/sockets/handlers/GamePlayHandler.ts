
import { ISocketHandler } from "../interfaces/ISocketHandler";
import { SocketEventNames } from "../../../shared/constants"
import { GamePlayDataCacheService } from "../../app/services/GamePlayDataCacheService";


export class GamePlayHandler implements ISocketHandler {
    socket: SocketIO.Socket;
    gamePlayDataCache: GamePlayDataCacheService;

    onRegister(io: SocketIO.Server, socket: SocketIO.Socket) {
        this.socket = socket;
        this.gamePlayDataCache = new GamePlayDataCacheService();

        socket.join("gamePlay")
            .on(SocketEventNames.Client.joinGame, (data, cb) => this.joinGame(data, cb))
            .on(SocketEventNames.Client.leaveGame, (data, cb) => this.leaveGame(data, cb))
            .on(SocketEventNames.Client.playVote, (data, cb) => this.playVote(data, cb));
    }

    leaveGame(data: any, callback: (data) => void) {
        this.socket.leave(`gamePlay#${data.game}`);
    }

    joinGame(data: any, callback: (data) => void) {
        this.socket.join(`gamePlay#${data.game}`);

        let gamePlayData = this.gamePlayDataCache.get(data.game);

        callback(gamePlayData.oaths[data.player]);
    }

    playVote(data: any, callback: (data: any) => void) {
        this.socket.in(`gamePlay#${data.game}`).broadcast.emit(SocketEventNames.Server.playerVotePlayed, data);
    }
}