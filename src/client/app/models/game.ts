
import { Player } from "./player";
import { GameOptions } from "./game-options";
import { GamePlayData } from "./game-play-data";

export class Game {
    _id: string;

    name: string;

    numberOfPlayers: number;

    createdBy: string;

    roles: string[] = [];

    players: string[] = [];

    items: string[] = [];

    options: GameOptions = new GameOptions();

    isPlayerInGame(player: Player): boolean {
        return this.players && this.players.indexOf(player.name) >= 0;
    }
}
