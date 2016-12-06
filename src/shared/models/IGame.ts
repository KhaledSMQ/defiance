
import { Player } from "./Player";
import { GameOptions } from "./GameOptions";
import { GamePlayData } from "./GamePlayData";

export interface IGame {
    name: string;

    numberOfPlayers: number;

    createdBy: string;

    roles: string[];

    players: string[];

    items: string[];

    options: GameOptions;
}
