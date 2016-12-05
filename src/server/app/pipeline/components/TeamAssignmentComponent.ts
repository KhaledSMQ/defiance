
import { BaseComponent } from "./BaseComponent";
import { GameData } from "../../../../shared/constants/GameData";
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
        let players: string[] = game.players;
        let currentEvil: number = 0;

        while (players.length > 0) {
            let random: number = Math.floor(Math.random() * players.length);

            let player: string = players[random];
            players.splice(random, 1);
            if (currentEvil < this.gameData.TeamCompositions[this.numberOfPlayers].evil) {
                let role: Role = new Role();
                role.faction = Faction.Evil;
                role.name = "Generic Evil";

                gamePlayData.assignedRoles[player] = role;
                currentEvil++;
            } else {
                let role: Role = new Role();
                role.faction = Faction.Good;
                role.name = "Generic Good";

                gamePlayData.assignedRoles[player] = role;
            }
        }

        return gamePlayData;
    }


}