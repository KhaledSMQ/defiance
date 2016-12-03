
import { Game } from "./game";
import { PlayerInfo } from "./player-info";

export class GameLobbyData {

    game: Game;

    playerInfo: { [name: string]: PlayerInfo } = {};

    constructor(game: Game) {
        this.game = game;
    }

    getPlayerInfo(name: string) {
        return this.playerInfo[name];
    }

    setPlayerInfo(name: string, info: any) {
        this.playerInfo[name] = info;
    }

}