
import { Player } from "./player";
import { GameOptions } from "./game-options";
import { GamePlayData } from "./game-play-data";

export class Game {
    _id: string;

    name: string;

    numberOfPlayers: number;

    roles: string[] = [];

    options: GameOptions;

    get currentPlayerCount(): number {
        if (this.playData && this.playData.players) {
            return this.playData.players.length;
        } else {
            return 0;
        }
    }

    playData: GamePlayData;
}
