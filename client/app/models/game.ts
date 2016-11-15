
import { Player } from "./player";
import { GameOptions } from "./game-options";

export class Game {
    _id: string;

    name: string;

    numberOfPlayers: number;

    roles: string[] = [];

    players: Player[] = [];

    options: GameOptions;
}
