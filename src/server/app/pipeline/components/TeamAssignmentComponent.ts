
import { BaseComponent } from "./BaseComponent";
import { Roles, GameData } from "../../../../shared/constants";
import { Game, GamePlayData, Role, Faction } from "../../../../shared/models";

export class TeamAssignmentComponent extends BaseComponent {

    numberOfPlayers: number;
    gameData: GameData;

    constructor(numberOfPlayers: number) {
        super();

        this.gameData = new GameData();
        this.numberOfPlayers = numberOfPlayers;
    }

    setupGame(game: Game, gamePlayData: GamePlayData) {
        let players: string[] = game.players.copy();
        let currentEvil: number = 0;

        while (players.length > 0) {
            let random: number = Math.floor(Math.random() * players.length);

            let player: string = players[random];
            players.splice(random, 1);
            if (currentEvil < this.gameData.TeamCompositions[this.numberOfPlayers].evil) {
                gamePlayData.assignedRoles[player] = Roles.GenericEvil;
                currentEvil++;
            } else {
                gamePlayData.assignedRoles[player] = Roles.GenericGood;
            }
        }

        return gamePlayData;
    }

    
}