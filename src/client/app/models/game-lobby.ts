
import { Game } from "./game";

export class GameLobby {

    game: Game;

    playerInfo: { [name: string]: any } = {};

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