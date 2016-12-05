
import { EvilRoleComponent } from "./EvilRoleComponent";
import { Roles, GameData } from "../../../../../shared/constants";
import { Game, GamePlayData, Role, Faction } from "../../../../../shared/models";

export class MorganaRoleComponent extends EvilRoleComponent {
    constructor() {
        super();
    }

    setupGame(game: Game, gamePlayData: GamePlayData) {
        let evilGenericPlayers: string[] = [];

        for (let playerName in gamePlayData.assignedRoles) {
            let role = gamePlayData.assignedRoles[playerName];
            if (role.faction === Faction.Evil && role.name === Roles.GenericEvil.name)
                evilGenericPlayers.push(playerName);
        }

        if (evilGenericPlayers.length > 0) {
            let random: number = Math.floor(Math.random() * evilGenericPlayers.length);
            gamePlayData.assignedRoles[evilGenericPlayers[random]] = Roles.Morgana;
        }

        return gamePlayData;
    }
}