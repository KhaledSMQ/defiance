
import { Player } from "./player";
import { GameOptions } from "./game-options";
import { GamePlayData } from "./game-play-data";

export interface IGame {
    name: string;

    numberOfPlayers: number;

    createdBy: string;

    roles: string[];

    players: string[];

    items: string[];

    options: GameOptions;
}
